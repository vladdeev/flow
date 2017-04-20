import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import * as workspaceAPIUtil from './util/workspace_api_util'

window.logout = logout;
window.fetchAllWorkspaces = workspaceAPIUtil.fetchAllWorkspaces;
window.fetchWorkspace = workspaceAPIUtil.fetchWorkspace;
window.createWorkspace = workspaceAPIUtil.createWorkspace;
window.updateWorkspace = workspaceAPIUtil.updateWorkspace;
window.deleteWorkspace = workspaceAPIUtil.deleteWorkspace;
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
