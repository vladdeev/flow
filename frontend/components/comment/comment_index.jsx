import React from 'react';
import { withRouter } from 'react-router';
import CommentIndexContainer from './comment_index_container';
import CommentSubmitForm from './comment_submit_form';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.params.taskId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.taskId !== nextProps.params.taskId) {
      this.props.fetchAllComments(nextProps.params.taskId);
    }
  }

  renderComments() {
    const comments = Object.values(this.props.commentsList);

    if (comments.length > 0) {
      return comments.map( comment => (
        <CommentIndexItem
          key={comment.id + comment.body}
          comment={comment}
        />
      ));
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="comment-index">
        <h1>Comments</h1>
        <CommentSubmitForm
          taskId={this.props.params.taskId}
          createComment={this.props.createComment}
        />
      </div>
    );
  }
}

export default withRouter(CommentIndex);
