import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import workspaceReducer from './workspace_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  workspace: workspaceReducer
});

export default rootReducer;
