import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <nav className="header-login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
      </nav>
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <hgroup className="header-group">
      <h2 className="header-name">Hi, {this.props.currentUser.first_name}!</h2>
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
  }

  _redirectToWorkspace() {
    hashHistory.push(`/${this.props.currentWorkspace}`)
  }

  render() {
    return this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
  };
}


export default Header;
