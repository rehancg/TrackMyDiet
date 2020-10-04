import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as AuthService from 'app/api/AuthService';
import actions from 'app/actions';
import ApiErrorHandler from 'app/utils/ApiErrorHandler';
import NavigationUtils from 'app/utils/NavigationUtils';

const requestOtp = (telNo: string): ThunkAction<void, null, undefined, AnyAction> => async (dispatch, getState) => {
    try {
        dispatch(actions.loader.showLoader);
        const response = await AuthService.requestOtpAsync({ telNo });
        if (response.data.referenceNo) {
            NavigationUtils.navigate('RequestOTP', { data: response.data })
        }
        dispatch(actions.loader.hideLoader);
    } catch (error) {
        dispatch(actions.loader.hideLoader);
        ApiErrorHandler(error);
    }
};

export {
    requestOtp
};
