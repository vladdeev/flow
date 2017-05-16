import { merge } from 'lodash';
import {
  RECEIVE_ALL_MEMBERS,
  RECEIVE_MEMBER,
  RECEIVE_ERRORS,
} from '../actions/member_actions';

const _defaultState = {
  membersList: {},
  errors: []
};

const teamReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MEMBERS:
      const membersList = action.members;
      return Object.assign({}, oldState, { membersList });
    case RECEIVE_MEMBER:
      return merge(
        {}, oldState, { membersList: { [action.member.id]: action.member }}
      );
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default teamReducer;
