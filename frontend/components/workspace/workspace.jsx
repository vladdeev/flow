import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import WorkspacesIndex from './workspaces_index';
import CreateWorkspaceForm from './create_workspace';
import WorkspaceSideBarContainer from './workspace_sidebar_container';
import WorkspaceDropdown from './workspace_dropdown';


class Workspace extends React.Component {
	constructor(props) {
    super(props);
		this.state = { dropdownOn: false, createWorkspaceOn: false };

		this._logOutAndClearState = this._logOutAndClearState.bind(this);
		this.toggleCreateWorkspace = this.toggleCreateWorkspace.bind(this);
		this.openSideBar = this.openSideBar.bind(this);
  }

	componentDidMount(){
		if (this.props.loggedIn) {
			this.props.fetchAllWorkspaces()
				.then((action) => {
					if (!this.props.params.workspaceId) {
						const firstWSid = Object.values(action.workspaces)[0].id;
						this.props.fetchWorkspace(firstWSid)
							.then(a => this.props.router.push(
								`/${a.workspace.id}/all/tasks`
							)
						);
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

	openSideBar () {
		const openedSideBarClass = "side-bar-opener-hidden";
	   document.getElementById("side-bar").style.width = "240px";
		 document.getElementById("side-bar-opener").className = openedSideBarClass;
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
			let workspaceId = this.props.currentWorkspace;
			let workspaceName = `${this.props.workspacesList[workspaceId].title}`;
			return(
				<div
					className="app-workspaces">

					<WorkspaceSideBarContainer />

					<content className='workspaces'>
						<nav className="workspaces-header group">
							<ul className="workspaces-header-left group">
								<Link to={`${this.props.params.workspaceId}/all/tasks`}>
									my tasks
								</Link>
								<li
									id="side-bar-opener"
									className="side-bar-opener-hidden"
									onClick={this.openSideBar}>
									&#8801;
								</li>
							</ul>
								<ul
								onClick={this.toggleDropdown}
								className="workspaces-header-right group">

								<div className="badge">
									<WorkspaceDropdown
										currentUser={this.props.currentUser}
										workspacesList={this.props.workspacesList}
										signOut={this._logOutAndClearState}
										toggleCreateWorkspace={this.toggleCreateWorkspace}
									/>
								</div>
								<li>{workspaceName}</li>
							</ul>
						</nav>
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
