import React from 'react';
import { hashHistory, Link } from 'react-router';

import HeaderContainer from '../header/header_container';
import FrontPage from './front_page';
import WorkspaceContainer from '../workspace/workspace_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderHeader() {
    if (this.props.loggedIn) {
      return null;
    } else {
      return (<FrontPage />);
    }
  }

  render() {
    return(
      <div>
        {this._renderHeader()}
        {this.props.children}
      </div>
    )
  }
}
export default App;

// {this._renderHeader()}.
