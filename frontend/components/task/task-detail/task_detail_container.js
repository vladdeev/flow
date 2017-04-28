import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import {
  receiveErrors,
  fetchAllTasks,
  fetchTask,
  createTask,
  updateTask,
  deleteTask
} from '../../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTaskId: ownProps.params.taskId,
    currentProjectId: ownProps.params.projectId,
    currentUser: state.session.currentUser,
    currentTask: state.task.currentTask,
    currentWorkspace: state.workspace.currentWorkspace,
    tasksList: state.task.tasksList,
    errors: state.task.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  fetchTask: (id) => dispatch(fetchTask(id)),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
