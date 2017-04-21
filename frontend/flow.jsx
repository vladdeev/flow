import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import {
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from './actions/workspace_actions'

window.logout = logout;
window.fetchAllWorkspaces = fetchAllWorkspaces;
window.fetchWorkspace = fetchWorkspace;
window.fetchInitialWorkspace = fetchInitialWorkspace;
window.createWorkspace = createWorkspace;
window.updateWorkspace = updateWorkspace;
window.deleteWorkspace = deleteWorkspace;

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
