import React from 'react';
import { Link, withRouter } from 'react-router';

class Workspace extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllWorkspaces();
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
    this._setCurrentWorkspace(this.props.params.workspaceId);
  }

  render() {
    return(
      <div>
        <h1>{this.props.workspacesList[this.props.currentWorkspace].title}</h1>
        <Link to="/10">To 10</Link>
      </div>
    );
  }

}
export default withRouter(Workspace);
