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
  }

  // componentWillMount() {
  //   debugger
  //   if (!this.state.title) {
  //     this.setState({title: ''});
  //   }
  // }

  // componentWillUnmount() {
  //   debugger
  //   this.props.updateTask(this.state);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.task !== this.state) {
      this.setState(nextProps.task);
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value } );
  }

  handleComplete() {
    this.setState({ completed: !this.state.completed });
  }

  handleBlur() {
    this.props.updateTask(this.state);
  }

  handleClick(e) {
    this.props.router.push("/" + this.props.params.workspaceId + "/" + this.props.params.projectId + "/" + "tasks" + "/" + e.target.id);
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
          onBlur={() => { this.props.updateTask(this.state); }} />
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
  width: '90%'
};

export default withRouter(TaskIndexItem);
