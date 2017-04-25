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
  currentWorkspace: "",
  workspacesList: {},
  errors: []
};

const workspaceReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_WORKSPACES:
      const workspacesList = action.workspaces;
      return Object.assign({}, oldState, { workspacesList });
    case RECEIVE_NEW_WORKSPACE:
      return merge({}, oldState, { workspacesList: { [action.workspace.id]: action.workspace }});
    case RECEIVE_WORKSPACE:
      return Object.assign({}, oldState, { currentWorkspace: action.workspace.id });
    case RECEIVE_INITIAL_WORKSPACE:
      return Object.assign({}, oldState, { currentWorkspace: action.workspace.id });
    case REMOVE_WORKSPACE:
      let newState = merge({}, oldState);
      delete newState["workspacesList"][action.workspaceId];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default workspaceReducer;
