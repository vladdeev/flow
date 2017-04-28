import ProjectShow from './project_show';
import { connect } from 'react-redux';
import {
  receiveAllProjects,
  receiveProject,
  receiveErrors,
  fetchAllProjects,
  fetchProject,
  fetchInitialProject,
  updateProject,
  deleteProject
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projectsList = state.project.projectsList;
  const currentProject = state.project.currentProject;
  const errors = state.project.errors;
  let currentProjectName = "";
  if (projectsList[currentProject]) {
    currentProjectName = projectsList[currentProject].title;
  }
  const currentWorkspace = state.workspace.currentWorkspace;

  return { projectsList, currentProject, currentWorkspace, currentProjectName, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // receiveAllProjects: (projects) => dispatch(receiveAllProjects(projects)),
  // receiveProject: (project) => dispatch(receiveProject(project)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  // fetchAllProjects: (workspace_id) => dispatch(fetchAllProjects(workspace_id)),
  updateProject: (workspace_id, project) => dispatch(updateProject(workspace_id, project)),
  fetchProject: (workspace_id, project_id) => dispatch(fetchProject(workspace_id, project_id)),
  deleteProject: (workspace_id, project) => dispatch(deleteProject(workspace_id, project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
