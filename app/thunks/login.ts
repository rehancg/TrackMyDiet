import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as AuthService from 'app/api/AuthService';
import actions from 'app/actions';
import ApiErrorHandler from 'app/utils/ApiErrorHandler';
import NavigationUtils from 'app/utils/NavigationUtils';
import { setApiToken } from 'app/api/ApiBuilder';
import { storeTokens } from 'app/utils/StorageUtils';

const requestOtp = (telNo: string, isResend: boolean = false): ThunkAction<void, null, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        dispatch(actions.loader.showLoader());
        const response = await AuthService.requestOtpAsync({ telNo });
        if (response.data.referenceNo && !isResend) {
            NavigationUtils.navigate('VerifyOTPScreen', { telNo, data: response.data })
        }
        dispatch(actions.loader.hideLoader());
    } catch (error) {
        dispatch(actions.loader.hideLoader());
        ApiErrorHandler(error);
    }
};

const verifyOtp = (telNo: string, referenceNo: string, otp: number): ThunkAction<void, null, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        dispatch(actions.loader.showLoader());
        const response = await AuthService.verifyOtpAsync({ telNo, referenceNo, otp });
        setApiToken(response.data.accessToken);
        await storeTokens(response.data);
        // get user session
        const response_user = await AuthService.getUserSession();
        dispatch(actions.user.updateUser(response_user.data));
        dispatch(actions.loader.hideLoader());
        NavigationUtils.navigate("OnBoading");
    } catch (error) {
        console.log("error", error)
        dispatch(actions.loader.hideLoader());
        ApiErrorHandler(error);
    }
};

export {
    requestOtp,
    verifyOtp
};
