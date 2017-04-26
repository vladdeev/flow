import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchProject(this.props.params.workspaceId, this.props.params.projectId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.projectId !== this.props.params.projectId) {
      this.props.fetchProject(nextProps.params.workspaceId, nextProps.params.projectId)
    }
  }

  render() {
    if(this.props.currentProject) {
      return(
        <section className="project-container">
          <h1>{this.props.currentProjectName}</h1>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default ProjectShow;
