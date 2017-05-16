import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      currentTaskList: [],
      taskDetailOpened: false
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.toggleTaskDetail = this.toggleTaskDetail.bind(this);
  }

  componentDidMount() {
    const currentState = this.state;
    this.props.fetchProjectTasks(
      this.props.currentWorkspace,
      this.props.currentProjectId);
      // .then((action) => {
      //   const tasksList = Object.values(action.tasks);
      //   const newState = merge(
      //     {}, currentState, { currentTaskList: tasksList }
      //   );
      //   this.setState(newState);
      // });
    // this.props.fetchAllTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentProjectId !== this.props.currentProjectId) {
      this.props.fetchProjectTasks(
        nextProps.currentWorkspace,
        nextProps.currentProjectId);
    }
  }

  selectTasks(tasksList, projectId) {
    const tasks = Object.values(tasksList);
    let selectedTasks = [];
    tasks.map(task => {
      if (task.project_id === parseInt(projectId)) {
        selectedTasks.push(task);
      }
    });

    return selectedTasks.reverse();
  }

  handleCreate() {
    this.props.createTask({title: "", workspace_id: this.props.currentWorkspace,
                          project_id: this.props.currentProjectId });
  }

  renderTasks() {
    const tasks = this.selectTasks(this.props.tasksList,
                                    this.props.params.projectId);

    // const tasks = this.state.currentTaskList;

    if (tasks.length > 0) {
      return tasks.map( (task) => (
        <TaskIndexItem task={task}
                        updateTask={this.props.updateTask}
                        fetchTask={this.props.fetchTask}
                        fetchCurrentTask={this.props.fetchCurrentTask}
                        toggleTaskDetail={this.toggleTaskDetail}
                        key={task.id + task.title}/>
      ));
    } else {
      return null;
    }
  }

  toggleTaskDetail() {
    if (this.state.taskDetailOpened) {
      this.setState({ taskDetailOpened: false });
    } else {
      this.setState({ taskDetailOpened: true });
    }
  }

  render() {
    if (this.props.loading) {
      return(
        <div className='task-index'>
          <div className='task-index-top'>
            <button className='task-index-top-left'
                    onTouchTap={this.handleCreate}>Add Task</button>
          </div>
        </div>
      );
    } else {
      return(
        <section className="task-container">
          <div className='task-index'>
            <div className='task-index-top'>
            <button className='task-index-top-left'
                    onTouchTap={this.handleCreate}>Add Task</button>
            </div>
            <ul className='task-index-list'>
              {this.renderTasks()}
            </ul>
          </div>
          {this.props.children}
        </section>
      );
    }
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
export default withRouter(TaskIndex);
