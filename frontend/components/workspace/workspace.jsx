import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import WorkspacesIndex from './workspaces_index';

class Workspace extends React.Component {
	constructor(props) {
    super(props);
		this.state = { dropdownOn: false };
		this._logOutAndClearState = this._logOutAndClearState.bind(this);
		this._renderDropdown = this._renderDropdown.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
  }

	componentDidMount(){
		if (this.props.loggedIn) {
			debugger
			this.props.fetchAllWorkspaces();
			this.props.fetchInitialWorkspace()
			.then((action) => (hashHistory.push(`/${action.workspace.id}`)));
		}
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
			// if (!nextProps.loggedIn) {
			// 	this.props.router.push('/');
			// }
  }

	_getInitials() {
		const first_initial = this.props.currentUser.first_name.slice(0,1);
		const second_initial = this.props.currentUser.last_name.slice(0,1);
		return first_initial.concat(second_initial);
	}

	_renderDropdown() {
		if (this.state.dropdownOn){
			return(
				<div onClick={this.toggleDropdown} className="dropdown">
					<section className="dropdown-workspaces">
						<h2>workspaces</h2>
						<WorkspacesIndex workspacesList={this.props.workspacesList} />
						<Link to={'/'}>+ Create new Workspace</Link>
					</section>
					<h2 onClick={this._logOutAndClearState}>Sign Out</h2>
				</div>
			)
		} else {
			return null;
		}
	}

	toggleDropdown() {
		if (this.state.dropdownOn) {
			this.setState({ dropdownOn: false })
		} else {
			this.setState({ dropdownOn: true })
		}
	}

  render() {
		if (this.props.currentWorkspace) {
			const currentWorkspace = this.props.currentWorkspace
			const workspaceTitle = this.props.workspacesList[currentWorkspace].title;
			return(

				<div onClick={this.resetDropdown} className="app-workspaces">
					<nav className="side-bar">
					</nav>

					<content className='workspaces'>
						<nav className="workspaces-header group">
							<ul className="workspaces-header-left group">
								<li>my tasks</li>
							</ul>
							<ul onClick={this.toggleDropdown} className="workspaces-header-right group">
								<div className="badge">{this._getInitials()}</div>
								<li>{`${workspaceTitle}`}</li>
							</ul>
						</nav>
					{this._renderDropdown()}

					</content>
				</div>
			);
		} else {
			return null
		}
  }
}

export default withRouter(Workspace);
