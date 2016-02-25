/* @flow */
import Immutable from 'immutable'
import { createReducer } from 'redux-act';
import { createActionAsync} from 'redux-act-async';
import auth from 'resources/auths';

export const signup = createActionAsync('SIGNUP', auth.signupLocal);

const initialState = Immutable.fromJS({
  registerCompleted: false
});

export default createReducer({
  [signup.ok]: (state/*, payload*/) => state.merge({registerCompleted:true}),
}, initialState);
