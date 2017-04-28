import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import TextField from 'material-ui/TextField';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div className="task-detail">
        <h1>Task Detail Container</h1>
      </div>
    );
  }
}

export default withRouter(TaskDetail);
