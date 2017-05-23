import * as commentAPIUtil from '../util/comment_api_util.js';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_COMMENT = "RECEIVE_CURRENT_COMMENT";

export const receiveAllComments = comments =>({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchAllComments = (taskId) => dispatch => (
  commentAPIUtil.fetchAllComments(taskId)
    .then(comments => dispatch(receiveAllComments(comments)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchComment = id => dispatch => (
  commentAPIUtil.fetchComment()
    .then(comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createComment = (taskId, comment) => dispatch => (
  commentAPIUtil.createComment(taskId, comment)
    .then(receivedComment => dispatch(receiveComment(receivedComment)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateComment = comment => dispatch => (
  commentAPIUtil.updateComment()
    .then(receivedComment => dispatch(receiveComment(receivedComment)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteComment = id => dispatch => (
  commentAPIUtil.deleteComment()
  .then(receivedComment => dispatch(removeComment(receivedComment)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
