import React from 'react';
import { withRouter } from 'react-router';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      currentTaskList: []
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTasks();
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
    this.props.createTask({title: "", workspace_id: this.props.currentWorkspace, project_id: this.props.currentProjectId });
  }

  renderTasks() {
    const tasks = this.selectTasks(this.props.tasksList, this.props.params.projectId);
    if (tasks.length > 0) {
      return tasks.map( (task) => (
        <TaskIndexItem task={task}
                        updateTask={this.props.updateTask}
                        fetchTask={this.props.fetchTask}
                        key={task.id + task.title}/>
      ));
    } else {
      return null;
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

export default withRouter(TaskIndex);
