import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import {
  fetchAllTasks,
  fetchTask,
  createTask,
  updateTask,
  deleteTask
} from './actions/task_actions';
import injectTapEventPlugin from 'react-tap-event-plugin';


window.fetchAllTasks = fetchAllTasks;
window.fetchTask = fetchTask;
window.createTask = createTask;
window.updateTask = updateTask;
window.deleteTask = deleteTask;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
