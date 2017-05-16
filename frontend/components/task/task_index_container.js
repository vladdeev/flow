import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { logout } from '../../actions/session_actions';//logout
import {
  receiveErrors,
  fetchAllTasks,
  fetchProjectTasks,
  fetchCurrentTask,
  fetchTask,
  createTask,
  updateTask,
  deleteTask
} from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
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
  fetchProjectTasks: (workspaceId, projectId) =>
    dispatch(fetchProjectTasks(workspaceId, projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  fetchTask: (id) => dispatch(fetchTask(id)),
  fetchCurrentTask: (id) => dispatch(fetchCurrentTask(id)),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
