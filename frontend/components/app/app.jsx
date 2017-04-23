import React from 'react';
import { hashHistory, Link } from 'react-router';

import HeaderContainer from '../header/header_container';
import WorkspaceContainer from '../workspace/workspace_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Flow</h1>
        </Link>
        <HeaderContainer />
      </header>
        {this.props.children}
      </div>
    )
  }
}
export default App;
