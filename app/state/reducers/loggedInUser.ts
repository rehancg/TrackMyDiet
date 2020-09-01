import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';
import { IUserState } from 'app/types/state/user';

const initialState: IUserState = {
    name: ''
}

const loggedInUserReducer = reducerWithInitialState(initialState)
    .build();

export default loggedInUserReducer;