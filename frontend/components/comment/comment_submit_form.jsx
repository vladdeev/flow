import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class CommentSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formRows: "1",
      comment: { body: "", task_id: props.params.taskId }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleInputSize = this.toggleInputSize.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.taskId !== nextProps.taskId) {
      this.setState({
        formRows: "1",
        comment: { body: "", task_id: nextProps.taskId }
      });
    }
  }

  update(field) {
    return e => {
      const newState = merge(
        {},
        this.state,
        { comment: { [field]: e.currentTarget.value}}
      );
      this.setState(newState);
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.props.params.taskId, this.state.comment);
    this.setState({
      formRows: "1",
      comment: { body: "", task_id: this.props.taskId }
    });
  }

  toggleInputSize() {
    const rows = (this.state.formRows === "1") ? "5" : "1";
    const newState = merge(
      {},
      this.state,
      { formRows: rows }
    );
    this.setState(newState);
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
          onClick={this.toggleInputSize}
          onBlur={this.toggleInputSize}
          type="text"
          rows={this.state.formRows}
          value={this.state.comment.body}
          placeholder="Type comment"
          onChange={this.update("body")}
          className="comment-input" />
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default withRouter(CommentSubmitForm);
