import React from 'react';
import { withRouter } from 'react-router';
import CommentIndexContainer from './comment_index_container';
import CommentSubmitForm from './comment_submit_form';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { body: "", task_id: props.params.taskId };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.params.taskId);
      // .then(action => this.setState(action.tasks));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.taskId !== nextProps.params.taskId) {
      this.props.fetchAllComments(nextProps.params.taskId);
        // .then(() => this.setState({ body: "", task_id: nextProps.params.taskId }));
    }
  }

  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createComment(this.props.params.taskId, this.state);
  //   this.setState({ body: "" });
  // }
  //
  // handleClick() {
  //
  // }
  //
  // renderErrors() {
  //   if (this.props.errors) {
  //     return(
  //       <ul>
  //         {this.props.errors.map((error) => (
  //           <li key={error}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

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

  // renderCreateComment() {
  //   return(
  //     <form onSubmit={this.handleSubmit} className="comment-create">
  //       <textarea
  //         onClick={this.handleClick}
  //         type="text"
  //         value={this.state.body}
  //         placeholder="Type comment"
  //         onChange={this.update("body")}
  //         className="comment-input" />
  //       <input type="submit" value="Add Comment" />
  //     </form>
  //   );
  // }

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
