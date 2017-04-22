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
    if (this.props.params) {
      this._setCurrentWorkspace(this.props.params.workspaceId);
    } else {
      this.props.fetchInitialWorkspace();
    }
  }



  render() {

    return(
      <div>
        <h1>YAY!</h1>
      </div>
    );
  }

}
export default withRouter(Workspace);
