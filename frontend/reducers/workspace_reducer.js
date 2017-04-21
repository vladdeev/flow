import { merge } from 'lodash';
import {
  RECEIVE_ALL_WORKSPACES,
  RECEIVE_INITIAL_WORKSPACE,
  RECEIVE_WORKSPACE,
  RECEIVE_NEW_WORKSPACE,
  REMOVE_WORKSPACE,
  RECEIVE_ERRORS
} from '../actions/workspace_actions';

const _defaultState = {
  currentWorkspace: {},
  workspacesList: [],
  errors: []
};

const workspaceReducer = (oldState = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_WORKSPACES:
      Object.freeze(oldState);
      const workspacesList = action.workspaces;
      return Object.assign({}, oldState, { workspacesList });
    case RECEIVE_NEW_WORKSPACE:
      let updatedState = merge({}, oldState);
      updatedState["workspacesList"].push(action.workspace);
      return updatedState;
    case RECEIVE_INITIAL_WORKSPACE:
      Object.freeze(oldState);
      const currentWorkspace = action.workspace;
      return merge({}, oldState, { currentWorkspace });
    case REMOVE_WORKSPACE:
      Object.freeze(oldState);
      let newState = merge({}, oldState);
      return newState["workspacesList"].map(workspace => {
          if (workspace["id"] !== action.workspaceId) {
            return workspace;
          }
        });
    case RECEIVE_ERRORS:
      Object.freeze(oldState);
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default workspaceReducer;
