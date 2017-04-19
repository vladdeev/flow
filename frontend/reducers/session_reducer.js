import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      Object.freeze(state);
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      Object.freeze(state);
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
