import { ILoaderState } from "./loader";
import { IUserState } from "./user";

export interface IState {
    loggedInUser: IUserState,
    loader: ILoaderState
}