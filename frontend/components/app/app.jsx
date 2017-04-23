import React from 'react';
import { hashHistory, Link } from 'react-router';
import HeaderContainer from '../header/header_container';
import WorkspaceContainer from '../workspace/workspace_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      if (!this.props.currentWorkspace) {
        this.props.fetchAllWorkspaces();
        this.props.fetchInitialWorkspace()
          .then(() => (hashHistory.push(`/${this.props.currentWorkspace}`)))
      }
    }
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
