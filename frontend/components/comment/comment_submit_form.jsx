import React from 'react';
import { withRouter } from 'react-router';
// import CommentIndexContainer from './comment_index_container';

class CommentSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", task_id: props.params.taskId };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllComments(this.props.params.taskId);
  //     // .then(action => this.setState(action.tasks));
  // }
  //
  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.params.taskId) {
      this.setState({ body: "", task_id: nextProps.taskId });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.params.taskId, this.state);
    this.setState({ body: "" });
  }

  handleClick() {

  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error) => (
            <li key={error}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit} className="comment-create">
        <textarea
          onClick={this.handleClick}
          type="text"
          value={this.state.body}
          placeholder="Type comment"
          onChange={this.update("body")}
          className="comment-input" />
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default withRouter(CommentSubmitForm);
