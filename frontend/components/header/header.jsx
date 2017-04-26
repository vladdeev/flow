import React from 'react';
import DemoLoginContainer from '../demo_login/demo_login_container';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick (path) {
    return e => {
      e.preventDefault();
      const url = `/${path}`;
      hashHistory.push(url);
    }
  }

  render() {
    return (
      <header className="front-header">
        <nav className="front-header-nav group">

          <div className="front-header-left">
            <Link to="/">flow</Link>
          </div>

          <ul className="front-header-right group">
            <li onClick={this.handleClick("login")} >
              <Link to="/login" activeClassName="current">Login</Link>
            </li>
            <li onClick={this.handleClick("login")}>
              <DemoLoginContainer />
            </li>
            <li onClick={this.handleClick("signup")}>
              <Link to="/signup" activeClassName="current">Sign up!</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
