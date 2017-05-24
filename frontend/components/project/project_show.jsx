import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import UpdateProjectForm from '../project/update_project_form';
import TaskIndexContainer from '../task/task_index_container';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: {}, dropdownOn: false, updateProjectOn: false };

    this._renderDropdown = this._renderDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdateProject = this.toggleUpdateProject.bind(this);
  }

  componentDidMount () {
    if (this.props.params.projectId === "all") {
      this.setState({ project: {title: "All Tasks"} });
    } else {
      this.props.fetchProject(
        this.props.params.workspaceId,
        this.props.params.projectId
      ).then(action => { this.setState({ project: action.project }); } );
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.projectId !== this.props.params.projectId) {
      if (nextProps.params.projectId === "all") {
        this.setState({ project: {title: "All Tasks"} });
      } else {
        this.props.fetchProject(
          nextProps.params.workspaceId,
          nextProps.params.projectId
        ).then(action => { this.setState({ project: action.project }); } );
      }
    }
  }

  _renderDropdown() {
    if (this.state.dropdownOn){
      return(
        <div onClick={this.toggleDropdown} className="dropdown-container">
          <section className="dropdown-projects">
            <ul>
              <li>
                <h7 onClick={this.handleDelete}>Delete Project</h7>
              </li>
              <li>
                <h7 onClick={this.toggleUpdateProject}>Rename Project</h7>
              </li>
            </ul>
          </section>
        </div>
      );
    } else {
      return null;
    }
  }

  toggleDropdown() {
    if (this.state.dropdownOn) {
      this.setState({ dropdownOn: false });
    } else {
      this.setState({ dropdownOn: true });
    }
  }

  toggleUpdateProject() {
    if (this.state.updateProjectOn) {
      this.setState({ updateProjectOn: false });
    } else {
      this.setState({ updateProjectOn: true });
    }
  }

  handleDelete() {
    this.props.deleteProject(
      this.props.currentWorkspace,
      this.props.currentProject)
      .then(() => {
        hashHistory.push(`/${this.props.currentWorkspace}/all/tasks`);
      });
  }

  _renderDropdownSymbol() {
    if (this.props.params.projectId === "all") {
      return null;
    } else {
      return(
        <div>
          <h7 onClick={this.toggleDropdown}>&#x25BC;</h7>
          {this._renderDropdown()}
        </div>
      );
    }
  }

  render() {
    if(this.state.project) {
      return(
        <div className="project-parent">
          <section className="project-container">
            <h1>{this.state.project.title}</h1>
            {this._renderDropdownSymbol()}

            <UpdateProjectForm
              currentProject={this.props.currentProject}
              currentProjectName={this.props.currentProjectName}
              toggleUpdateProject={this.toggleUpdateProject}
              currentWorkspace={this.props.currentWorkspace}
              formOpen={this.state.updateProjectOn}
              updateProject={this.props.updateProject}
              receiveErrors={this.props.receiveErrors}
              errors={this.props.errors} />
          </section>

					  {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ProjectShow);
