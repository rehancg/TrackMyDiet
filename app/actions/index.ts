import { IUserState } from 'app/types/state/user';
import { actionCreatorFactory } from 'typescript-fsa';

const languageAction = actionCreatorFactory('language');
const loaderAction = actionCreatorFactory('loader');
const userAction = actionCreatorFactory('user');


const actions = {
    user: {
        updateUser: userAction<IUserState>('updateUser')
    },
    language: {
        changeLanguage: languageAction<string>('changeLanguage')
    },
    loader: {
        showLoader: loaderAction('showLoader'),
        hideLoader: loaderAction('hideLoader')
    }
}

export default actions;