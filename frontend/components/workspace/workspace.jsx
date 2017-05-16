import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import WorkspacesIndex from './workspaces_index';
import CreateWorkspaceForm from './create_workspace';
import WorkspaceSideBarContainer from './workspace_sidebar_container';


class Workspace extends React.Component {
	constructor(props) {
    super(props);
		this.state = { dropdownOn: false, createWorkspaceOn: false };

		this._logOutAndClearState = this._logOutAndClearState.bind(this);
		this._renderDropdown = this._renderDropdown.bind(this);
		this.toggleCreateWorkspace = this.toggleCreateWorkspace.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.redirectToWorkspace = this.redirectToWorkspace.bind(this);
		this.openSideBar = this.openSideBar.bind(this);
  }

	componentDidMount(){
		if (this.props.loggedIn) {
			this.props.fetchAllWorkspaces()
				.then((action) => {
					if (!this.props.params.workspaceId) {
						const firstWSid = Object.values(action.workspaces)[0].id;
						this.props.fetchWorkspace(firstWSid);
					}
				});
		}
	}

	_logOutAndClearState() {
    if (this.props.loggedIn) {
      this.props.receiveAllWorkspaces({});
      this.props.receiveWorkspace("");
      this.props.receiveErrors([]);
      this.props.logout().then(() => this.props.router.push('/'));
    }
  }

	_getInitials() {
		const firstInitial = this.props.currentUser.first_name.slice(0,1);
		const secondInitial = this.props.currentUser.last_name.slice(0,1);
		return firstInitial.concat(secondInitial);
	}

	_renderDropdown() {
		if (this.state.dropdownOn){
			return(
				<div onClick={this.toggleDropdown} className="dropdown">
					<section className="dropdown-workspaces">
						<h2>workspaces</h2>
						<WorkspacesIndex
							workspacesList={this.props.workspacesList}
							redirectToWorkspace={this.redirectToWorkspace}/>
						<h3
							onClick={this.toggleCreateWorkspace}>
							+ Create new Workspace
						</h3>
					</section>

					<h2 onClick={this._logOutAndClearState}>Sign Out</h2>
				</div>
			);
		} else {
			return null;
		}
	}

	openSideBar () {
	   document.getElementById("side-bar").style.width = "240px";
	}

	redirectToWorkspace (id) {
		hashHistory.push(`/${id}`);
	}

	toggleDropdown() {
		if (this.state.dropdownOn) {
			this.setState({ dropdownOn: false });
		} else {
			this.setState({ dropdownOn: true });
		}
	}

	toggleCreateWorkspace() {
		if (this.state.createWorkspaceOn) {
			this.setState({ createWorkspaceOn: false });
		} else {
			this.setState({ createWorkspaceOn: true });
		}
	}

  render() {
		if (this.props.workspacesList[this.props.currentWorkspace]) {
			return(
				<div
					onClick={this.resetDropdown}
					className="app-workspaces">

					<WorkspaceSideBarContainer />

					<content className='workspaces'>
						<nav className="workspaces-header group">
							<ul className="workspaces-header-left group">
								<li onClick={this.openSideBar}>my projects</li>
							</ul>
								<ul
								onClick={this.toggleDropdown}
								className="workspaces-header-right group">

								<div
									className="badge">{this._getInitials()}
								</div>
								<li>{`${this.props.workspacesList[this.props.currentWorkspace].title}`}</li>
							</ul>
						</nav>
						{this._renderDropdown()}
						{this.props.children}
					</content>

					<CreateWorkspaceForm
						toggleCreateWorkspace={this.toggleCreateWorkspace}
						formOpen={this.state.createWorkspaceOn}
						createWorkspace={this.props.createWorkspace}
						receiveErrors={this.props.receiveErrors}
						errors={this.props.errors} />

				</div>
			);
		} else {
			return null;
		}
  }
}

export default withRouter(Workspace);
