import { createStore, AnyAction, CombinedState } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { IState } from 'app/types/state';
import reducer from './reducers';
import middlewares from './middlewares';


const buildState = (onCreate?: (dispatch: ThunkDispatch<IState, {}, AnyAction>) => void) => {
    const persistConfig: PersistConfig<CombinedState<IState>, any, any, any> = {
        key: 'root',
        storage: AsyncStorage,
        blacklist: ['loader']
    }

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, middlewares);
    let persistor = persistStore(store)
    onCreate && onCreate(store.dispatch);

    return { store, persistor };
}

export default buildState;