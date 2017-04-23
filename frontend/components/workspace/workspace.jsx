import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Workspace extends React.Component {
	constructor(props) {
    super(props);
  }

  _userhasWorkspace(id) {
    const workspaces_keys = Object.keys(this.props.workspacesList);
    if(workspaces_keys.includes(id)) { return true; }
    return false;
  }

  _setCurrentWorkspace(id) {
    if (this._userhasWorkspace(id)) {
      this.props.fetchWorkspace(id);
    } else {
      this.props.fetchInitialWorkspace();
    }
  }

  componentWillReceiveProps(nextProps) {
			if (nextProps.loggedIn) {
				this._setCurrentWorkspace(this.props.params.workspaceId);
			}
  }

  render() {
    return(
      <div>
        <h1>{this.props.workspacesList[this.props.currentWorkspace].title}</h1>
      </div>
    );
  }
}

export default withRouter(Workspace);
