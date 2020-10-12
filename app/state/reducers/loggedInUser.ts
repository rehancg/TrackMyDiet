import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';
import { IUserState } from 'app/types/state/user';
import actions from 'app/actions';

const initialState: IUserState = {
    id: null,
    telNo: '',
    msisdn: '',
    subscription_status: null,
    refreshToken: '',
    height: 0,
    weight: 0,
    age: 0,
    gender: null,
    language: '',
    bmi: 0,
    ideal_weight: 0,
    calory_requirement: 0,
    activity_level: null,
    food_type: null,
    goal: null
}

const loggedInUserReducer = reducerWithInitialState(initialState)
    .case(actions.user.updateUser, (state, payload: IUserState) => payload)
    .build();

export default loggedInUserReducer;