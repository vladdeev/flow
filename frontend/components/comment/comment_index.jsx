import React from 'react';
import { withRouter } from 'react-router';
import CommentIndexContainer from './comment_index_container';
import CommentSubmitForm from './comment_submit_form';
import CommentIndexItem from './comment_index_item';

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
    const members = this.props.membersList;

    if (comments.length > 0) {
      return comments.map( comment => (
        <CommentIndexItem
          key={comment.id + comment.body}
          comment={comment}
          author={members[comment.author_id]}
          deleteComment={this.props.deleteComment}
        />
      ));
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="comment-index">
        {this.renderComments()}
      </div>
    );
  }
}

export default withRouter(CommentIndex);
