import * as projectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_NEW_PROJECT = "RECEIVE_NEW_PROJECT";
export const RECEIVE_INITIAL_PROJECT = "RECEIVE_INITIAL_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveNewProject = (project) => ({
  type: RECEIVE_NEW_PROJECT,
  project
});

export const receiveInitialProject = (project) => ({
  type: RECEIVE_INITIAL_PROJECT,
  project
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeProject = (project) => ({
  type: REMOVE_PROJECT,
  projectId: project.id
});

export const fetchAllProjects = (workspace_id) => dispatch => (
  projectAPIUtil.fetchAllProjects(workspace_id)
    .then(projects => dispatch(receiveAllProjects(projects)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchProject = (workspace_id, project_id) => dispatch => (
  projectAPIUtil.fetchProject(workspace_id, project_id)
    .then(project => dispatch(receiveProject(project)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchInitialProject = (workspace_id) => dispatch => (
  projectAPIUtil.fetchProject(workspace_id, 0)
    .then(project => dispatch(receiveInitialProject(project)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createProject = (workspace_id, project) => dispatch => (
  projectAPIUtil.createProject(workspace_id, project)
    .then(project => dispatch(receiveNewProject(project)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateProject = (workspace_id, project)  => dispatch => (
  projectAPIUtil.updateProject(workspace_id, project)
    .then(project => dispatch(receiveProject(project)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteProject = (workspace_id, project_id) => dispatch => (
  projectAPIUtil.deleteProject(workspace_id, project_id)
    .then(project => dispatch(removeProject(project)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
