import React from 'react';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.task;
  }

  render() {
    return(
      <h1>{this.state.title}</h1>
    );
  }
}

export default TaskDetail;
