import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import i18next from 'app/i18n';

const changeLanguage = (lang: string): ThunkAction<void, null, undefined, AnyAction> => async (dispatch, getState) => {
    await i18next.changeLanguage(lang);
};

export default changeLanguage;
