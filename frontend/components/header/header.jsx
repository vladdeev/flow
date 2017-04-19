import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="header-login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Header = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
};

export default Header;
