import { combineReducers } from 'redux';

import loggedInUser from "./loggedInUser";
import loader from "./loader";

import { IState } from 'app/types/state';


const reducer = combineReducers<IState>({
    loggedInUser,
    loader
});

export default reducer;