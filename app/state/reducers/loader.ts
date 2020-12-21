import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';
import { ILoaderState } from 'app/types/state/loader';
import actions from 'app/actions';

const initialState: ILoaderState = {
    isVisible: false
}

const loaderReducer = reducerWithInitialState(initialState)
    .case(actions.loader.showLoader, produce((draft: ILoaderState) => {
        draft.isVisible = true;
    }))
    .case(actions.loader.hideLoader, produce((draft: ILoaderState) => {
        draft.isVisible = false;
    }))
    .build();

export default loaderReducer;