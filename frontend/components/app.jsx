import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Flow</h1>
      </Link>
      <HeaderContainer />
    </header>
    {children}
  </div>
);

export default App;
