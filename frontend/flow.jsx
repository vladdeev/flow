import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util'

window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
window.signup = SessionAPIUtil.signup;
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Flow</h1>, root);
});
