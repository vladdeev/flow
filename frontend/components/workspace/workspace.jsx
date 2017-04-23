import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
class Workspace extends React.Component {
	constructor(props) {
    super(props);
  }

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
				</div>
			);
		} else {
			return null
		}
  }
}

export default withRouter(Workspace);
