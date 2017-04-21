import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../header/header_container';


const _renderStartingPage = (loggedIn) => {
  if (loggedIn) {
    return(
      <div>
       <h1>Hi</h1>
       return <HeaderContainer />
      </div>
    )
  }
  return <HeaderContainer />
}
const App = (props) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Flow</h1>
      </Link>
      {_renderStartingPage(props.loggedIn)}
    </header>
    {props.children}
  </div>
);

export default App;
