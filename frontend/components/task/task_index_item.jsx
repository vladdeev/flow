import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import { merge } from 'lodash';
import TextField from 'material-ui/TextField';
import { lightBlue200 } from 'material-ui/styles/colors';
import TaskDetail from './task_detail';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleChange = this.handleChange.bind(this);
    this.updateTask = this.props.updateTask.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.task !== this.state) {
      this.setState(nextProps.task);
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value } );
  }

  handleBlur() {
    this.props.updateTask(this.state);
  }

  handleClick(e) {
    this.props.router.push("/"
    + this.props.params.workspaceId
    + "/"
    + this.props.params.projectId
    + "/"
    + "tasks"
    + "/"
    + e.target.id);
  }

  handleUpdate() {
    this.props.updateTask(this.state)
      .then(() => { this.props.fetchCurrentTask(this.state.id); });
  }

  handleComplete() {
    const task = Object.assign({}, this.state, { completed: !this.state.completed });
    this.setState({ completed: !this.state.completed });
    this.props.updateTask(task)
      .then(() => { this.props.fetchCurrentTask(this.state.id); });
  }

  handleComplete() {
    if (!this.state.completed) {
      const dateClosed = new Date();
      const date = dateClosed.toISOString().slice(0,10);
      const time = dateClosed.toISOString().slice(11,19);
      const dateStr = date.concat(` ${time}`);

      const task = Object.assign({}, this.state, { completed_at: dateStr, completed: !this.state.completed });
      this.props.updateTask(task)
        .then(() => { this.props.fetchCurrentTask(this.state.id)
          .then(action => { this.setState(action.task); });
         });
    } else {
      const task = Object.assign({}, this.state, { completed_at: null, completed: !this.state.completed });
      this.props.updateTask(task)
        .then(() => { this.props.fetchCurrentTask(this.state.id)
          .then(action => { this.setState(action.task); });
         });
    }
  }

  render() {
    let className, buttonClassName;

    if (this.state.completed) {
      className = 'completed-task-input';
      buttonClassName = 'completed-task-check';
    } else {
      className = 'task-input';
      buttonClassName = 'task-check';
    }

    return(
      <li className={className}>
        <button onClick={this.handleComplete}
          className={buttonClassName}></button>

        <TextField id={`${this.state.id}`}
          hintText=""
          value={this.state.title}
          onClick={this.handleClick}
          onChange={this.handleChange}
          multiLine={false}
          underlineShow={true}
          style={textFieldStyle}
          inputStyle ={{width: '100%'}}
          onBlur={this.handleUpdate} />
      </li>
    );
  }
}

const textFieldStyle = {
  display: 'inline-block',
  paddingLeft: '10px',
  fontSize: '1em',
  height: '40px',
  paddingBottom: '3px',
  width: '95%'
};

export default withRouter(TaskIndexItem);
