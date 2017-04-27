import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import UpdateProjectForm from '../project/update_project_form';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOn: false, updateProjectOn: false };

    this._renderDropdown = this._renderDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdateProject = this.toggleUpdateProject.bind(this);
  }

  componentDidMount () {
    this.props.fetchProject(this.props.params.workspaceId, this.props.params.projectId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.projectId !== this.props.params.projectId) {
      this.props.fetchProject(nextProps.params.workspaceId, nextProps.params.projectId)
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

  toggleUpdateProject() {
    if (this.state.updateProjectOn) {
      this.setState({ updateProjectOn: false })
    } else {
      this.setState({ updateProjectOn: true })
    }
  }

  handleDelete() {
    this.props.deleteProject(this.props.currentWorkspace, this.props.currentProject)
      .then(() => {
        hashHistory.push(`/${this.props.currentWorkspace}`)
      });
  }

  render() {
    if(this.props.currentProject) {
      return(
        <section className="project-container">
          <h1>{this.props.currentProjectName}</h1>
          <div>
            <h7 onClick={this.toggleDropdown}>&#x25BC;</h7>
            {this._renderDropdown()}
          </div>

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
      )
    } else {
      return null;
    }
  }
}

export default withRouter(ProjectShow);
