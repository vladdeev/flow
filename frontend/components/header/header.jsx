import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this._logOutAndClearState = this._logOutAndClearState.bind(this);
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
      <button className="header-button" onClick={this._logOutAndClearState}>Log Out</button>
      <br />
      <Link to="/10">10</Link>&nbsp;or&nbsp;
      <Link to="/11">11</Link>
      </hgroup>
    );
  }

  _logOutAndClearState() {
    this.props.receiveAllWorkspaces({});
    this.props.receiveWorkspace("");
    this.props.receiveErrors([]);
    this.props.logout()
  }

  _redirectToWorkspace() {
    hashHistory.push(`/${this.props.currentWorkspace}`)
  }

  render() {
    return this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()
  };
}

export default Header;
