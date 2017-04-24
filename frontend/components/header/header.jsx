import React from 'react';
import DemoLoginContainer from '../demo_login/demo_login_container';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {

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

  render() {
    return (
      <nav className="front-header">
        <ul className="front-header-right">
          <li>
            <Link to="/login" activeClassName="current">Login</Link>
          </li>
          <li>
            <DemoLoginContainer />
          </li>
          <li>
            <Link to="/signup" activeClassName="current">Sign up!</Link>
          </li>
        </ul>
        <ul>
          <p>flow</p>
        </ul>
      </nav>
    );
  }
}

export default Header;
