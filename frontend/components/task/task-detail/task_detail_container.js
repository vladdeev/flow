import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import {
  receiveErrors,
  fetchAllTasks,
  fetchTask,
  fetchCurrentTask,
  createTask,
  updateTask,
  deleteTask
} from '../../../actions/task_actions';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentProjectId: ownProps.params.projectId,
    currentUser: state.session.currentUser,
    currentTask: state.task.currentTask,
    currentWorkspace: state.workspace.currentWorkspace,
    tasksList: state.task.tasksList,
    membersList: state.team.membersList,
    errors: state.task.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTask: (id) => dispatch(deleteTask(id)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  fetchTask: (id) => dispatch(fetchTask(id)),
  fetchCurrentTask: (id) => dispatch(fetchCurrentTask(id)),
  createTask: (task) => dispatch(createTask(task)),
  createComment: (taskId, comment) => dispatch(createComment(taskId, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
