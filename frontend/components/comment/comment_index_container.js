import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import {
  fetchAllComments,
  fetchComment,
  createComment,
  deleteComment,
  receiveErrors
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    commentsList: state.comments.commentsList,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllComments: (taskId) => dispatch(fetchAllComments(taskId)),
  fetchComment: (id) => dispatch(fetchComment(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
