import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProjects(this.props.currentWorkspace);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentWorkspace !== nextProps.currentWorkspace) {
      this.props.fetchAllProjects(nextProps.currentWorkspace);
    }
  }

  render() {
    return(
      <section className="project-index">
        <ul>
          <h3>projects</h3>
          {Object.values(this.props.projectsList).map(project => (
            <ProjectIndexItem
              key={project.id}
              project={project}
              currentWorkspace={this.props.currentWorkspace}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default ProjectIndex;
