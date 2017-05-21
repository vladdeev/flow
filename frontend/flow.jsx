import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import {
  fetchAllComments,
  // fetchComment,
  // createComment,
  // updateComment,
  // deleteComment
} from './actions/comment_actions';
import injectTapEventPlugin from 'react-tap-event-plugin';


window.fetchAllComments = fetchAllComments;
// window.fetchComment = fetchComment;
// window.createComment = createComment;
// window.updateComment = updateComment;
// window.deleteComment = deleteComment;

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
