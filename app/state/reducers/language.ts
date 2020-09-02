import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';
import { ILanguageState } from 'app/types/state/language';
import actions from 'app/actions';

const initialState: ILanguageState = {
    activeLanguage: 'en'
}

const languageReducer = reducerWithInitialState(initialState)
    .case(actions.language.changeLanguage, produce((draft: ILanguageState, payload: string) => {
        draft.activeLanguage = payload;
    }))
    .build();

export default languageReducer;