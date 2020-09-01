import { combineReducers } from 'redux';

import loggedInUser from "./loggedInUser";
import { IState } from 'app/types/state';


const reducer = combineReducers<IState>({
    loggedInUser,
});

export default reducer;