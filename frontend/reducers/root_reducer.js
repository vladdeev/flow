import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import workspaceReducer from './workspace_reducer';
import projectReducer from './project_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  workspace: workspaceReducer,
  project: projectReducer
});

export default rootReducer;
