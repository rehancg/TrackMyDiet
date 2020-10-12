import { ILoginSuccesshResponse } from "app/types/api/ILoginSuccessResponse"
import { IRequestOtpResponse } from "app/types/api/IRequestOtpResponse"
import { IUserState } from "app/types/state/user"
import { AxiosResponse } from "axios"
import API from "./ApiBuilder"

const requestOtpAsync = async (data: {
    telNo: string
}): Promise<AxiosResponse<IRequestOtpResponse>> => {
    return await API.post('/auth/otp/request', data)
}

const verifyOtpAsync = async (data: {
    telNo: string,
    referenceNo: string,
    otp: number
}): Promise<AxiosResponse<ILoginSuccesshResponse>> => {
    return await API.post('/auth/otp/validate', data)
}

const getUserSession = async (): Promise<AxiosResponse<IUserState>> => {
    return await API.get('/auth/current-session')
}

export {
    requestOtpAsync,
    verifyOtpAsync,
    getUserSession
}