import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProjects(this.props.currentWorkspace);
  }

  render() {
    return(
      <section className="project-index">
        <ul>
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
