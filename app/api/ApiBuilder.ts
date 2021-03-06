import * as Axios from 'axios';
import { getTokens, storeTokens } from 'app/utils/StorageUtils';
import { ITokenRefreshResponse } from 'app/types/api/ITokenRefreshReponse';

const API_RETRY_ATTEMPTS = 2;

const API = Axios.default.create({
    baseURL: 'http://localhost:1024', //'http://143.110.186.112',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json', 'RetryCount': 0 },
});

API.interceptors.response.use((response) => {
    return response;
}, async (err) => {
    try {
        if (err.response.status == 401 && err.config.headers.RetryCount < API_RETRY_ATTEMPTS) {
            try {
                const { refreshToken, accessToken } = await getTokens();
                // refresh tokens 
                const tokenRefreshResponse = await API.post<ITokenRefreshResponse>('/auth/token/renew', {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                })

                await storeTokens(tokenRefreshResponse.data);
                err.config.headers.Authorization = `Bearer ${tokenRefreshResponse.data.accessToken}`
                err.config.headers.RetryCount = err.config.headers.RetryCount + 1;
                return await API.request(err.config);
            } catch (error) {
                return Promise.reject(err.response)
            }
        } else {
            return Promise.reject(err.response)
        }
    } catch (error) {
        return Promise.reject(err.response)
    }
})

export const setApiToken = (token: string) => {
    API.defaults.headers.Authorization = `Bearer ${token}`;
}

export default API;
