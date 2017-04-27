import React from 'react';
import { Link, withRouter } from 'react-router';
import ProjectIndexContainer from '../project/project_index_container';
import CreateProjectForm from '../project/create_project_form';

class WorkspaceSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { createProjectOn: false };
    this.toggleCreateProject = this.toggleCreateProject.bind(this);
  }

  closeNav() {
    document.getElementById("side-bar").style.width = "0";
  }

  toggleCreateProject() {
    if (this.state.createProjectOn) {
      this.setState({ createProjectOn: false })
    } else {
      this.setState({ createProjectOn: true })
    }
  }

  render() {
    return(
      <nav className="side-bar" id="side-bar">
        <div className="side-bar-logo group">
          <Link to="/">flow</Link>
          <Link onClick={() => (closeNav())} to="/">&#215;</Link>
        </div>
        <ProjectIndexContainer />
        <h7 onClick={this.toggleCreateProject}>+ New Project</h7>

        <CreateProjectForm
          toggleCreateProject={this.toggleCreateProject}
          formOpen={this.state.createProjectOn}
          createProject={this.props.createProject}
          receiveErrors={this.props.receiveErrors}
          errors={this.props.errors} />
      </nav>
    )
  }
}

export default withRouter(WorkspaceSideBar);
