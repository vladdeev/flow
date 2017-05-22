import { merge } from 'lodash';
import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_COMMENT
} from '../actions/comment_actions';

const _defaultState = {
  commentsList: {},
  errors: []
};

const commentReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      const commentsList = action.comments;
      return Object.assign({}, oldState, { commentsList });
    case RECEIVE_COMMENT:
      return merge(
        {},
        oldState,
        { commentsList: { [action.comment.id]: action.comment }}
      );
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState["commentsList"][action.comment.id];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default commentReducer;
