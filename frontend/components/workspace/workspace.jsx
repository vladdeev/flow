import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
class Workspace extends React.Component {
	constructor(props) {
    super(props);
		this._logOutAndClearState = this._logOutAndClearState.bind(this);
  }

//temp logout
	_logOutAndClearState() {
    if (this.props.loggedIn) {
      this.props.receiveAllWorkspaces({});
      this.props.receiveWorkspace("");
      this.props.receiveErrors([]);
      this.props.logout()
    }
  }
//temp logout




  componentWillReceiveProps(nextProps) {
			if (!nextProps.loggedIn) {
				this.props.router.push('/');
			}
  }

  render() {
		if (this.props.currentWorkspace) {
			return(
				<div>
					<h1>{this.props.workspacesList[this.props.currentWorkspace].title}</h1>
					<button
						className="header-button"
						onClick={this._logOutAndClearState}>
						Log Out</button>
				</div>
			);
		} else {
			return null
		}
  }
}

export default withRouter(Workspace);
