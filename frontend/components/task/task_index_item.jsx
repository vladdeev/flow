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
  }

  componentWillMount() {
    if (!this.state.title) {
      this.setState({title: ''});
    }
  }

  componentWillUnmount() {
    this.props.updateTask(this.state);
  }

  handleChange(e) {
    this.setState({ title: e.target.value } );
  }

  handleComplete() {
    this.setState({ completed: !this.state.completed });
  }

  renderDetailHeader() {

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
          onChange={this.handleChange}
          multiLine={false}
          underlineShow={true}
          style={textFieldStyle}
          inputStyle ={{width: '100%'}}
          onBlur={() => { this.props.updateTask(this.state) }} />
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
