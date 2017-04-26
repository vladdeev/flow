import ProjectIndex from './project_index';
import { connect } from 'react-redux';
import {
  receiveAllProjects,
  receiveProject,
  receiveErrors,
  fetchAllProjects,
  fetchProject,
  fetchInitialProject,
  createProject,
  updateProject,
  deleteProject
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    currentProject: state.project.currentProject,
    projectsList: state.project.projectsList,
    currentWorkspace: state.workspace.currentWorkspace,
    errors: state.project.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveAllProjects: (projects) => dispatch(receiveAllProjects(projects)),
  receiveProject: (project) => dispatch(receiveProject(project)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  fetchAllProjects: (workspace_id) => dispatch(fetchAllProjects(workspace_id)),
  fetchInitialProject: (workspace_id) => dispatch(fetchInitialProject(workspace_id)),
  fetchProject: (workspace_id, project_id) => dispatch(fetchProject(workspace_id, project_id)),
  createProject: (workspace_id, project) => dispatch(createProject(workspace_id, project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
