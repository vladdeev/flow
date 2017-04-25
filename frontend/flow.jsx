import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import {
  fetchAllProjects,
  fetchProject,
  fetchInitialProject,
  createProject,
  updateProject,
  deleteProject
} from './actions/project_actions'

window.logout = logout;
window.fetchAllProjects = fetchAllProjects;
window.fetchProject = fetchProject;
window.fetchInitialProject = fetchInitialProject;
window.createProject = createProject;
window.updateProject = updateProject;
window.deleteProject = deleteProject;

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
