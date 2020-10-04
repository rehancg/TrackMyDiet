import { IRequestOtpResponse } from "app/types/api/IRequestOtpResponse"
import { AxiosResponse } from "axios"
import API from "./ApiBuilder"

const requestOtpAsync = async (data: {
    telNo: string
}): Promise<AxiosResponse<IRequestOtpResponse>> => {
    return await API.post('/auth/otp/request', data)
}

export {
    requestOtpAsync
}