import * as workspaceAPIUtil from '../util/workspace_api_util';

export const RECEIVE_ALL_WORKSPACES = "RECEIVE_ALL_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const RECEIVE_NEW_WORKSPACE = "RECEIVE_NEW_WORKSPACE";
export const RECEIVE_INITIAL_WORKSPACE = "RECEIVE_INITIAL_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllWorkspaces = (workspaces) => ({
  type: RECEIVE_ALL_WORKSPACES,
  workspaces
});

export const receiveWorkspace = (workspace) => ({
  type: RECEIVE_WORKSPACE,
  workspace
});

export const receiveNewWorkspace = (workspace) => ({
  type: RECEIVE_NEW_WORKSPACE,
  workspace
});

export const receiveInitialWorkspace = (workspace) => ({
  type: RECEIVE_INITIAL_WORKSPACE,
  workspace
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeWorkspace = (workspace) => ({
  type: REMOVE_WORKSPACE,
  workspaceId: workspace.id
});

export const fetchAllWorkspaces = () => dispatch => (
  workspaceAPIUtil.fetchAllWorkspaces()
    .then(workspaces => dispatch(receiveAllWorkspaces(workspaces)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchWorkspace = id => dispatch => (
  workspaceAPIUtil.fetchWorkspace(id)
    .then(workspace => dispatch(receiveWorkspace(workspace)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchInitialWorkspace = () => dispatch => (
  workspaceAPIUtil.fetchWorkspace(0)
    .then(workspace => dispatch(receiveInitialWorkspace(workspace)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createWorkspace = workspace => dispatch => (
  workspaceAPIUtil.createWorkspace(workspace)
    .then(workspace => dispatch(receiveNewWorkspace(workspace)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateWorkspace = workspace => dispatch => (
  workspaceAPIUtil.updateWorkspace(workspace)
    .then(workspace => dispatch(receiveWorkspace(workspace)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteWorkspace = workspace => dispatch => (
  workspaceAPIUtil.deleteWorkspace(workspace)
    .then(workspace => dispatch(removeWorkspace(workspace)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
