import { actionCreatorFactory } from 'typescript-fsa';

const languageAction = actionCreatorFactory('language');

const actions = {
    language: {
        changeLanguage: languageAction<string>('changeLanguage')
    }
}

export default actions;