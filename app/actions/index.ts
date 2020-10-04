import { actionCreatorFactory } from 'typescript-fsa';

const languageAction = actionCreatorFactory('language');
const loaderAction = actionCreatorFactory('loader');


const actions = {
    language: {
        changeLanguage: languageAction<string>('changeLanguage')
    },
    loader: {
        showLoader: loaderAction('showLoader'),
        hideLoader: loaderAction('hideLoader')
    }
}

export default actions;