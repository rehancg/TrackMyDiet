import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import i18next from 'app/i18n';
import actions from 'app/actions';

const changeLanguage = (lang: string): ThunkAction<void, null, undefined, AnyAction> => async (dispatch, getState) => {
    await i18next.changeLanguage(lang);
    dispatch(actions.language.changeLanguage(lang))
};

export default changeLanguage;
