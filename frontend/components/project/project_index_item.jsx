import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = (props) => (
  <li className="project-index-item">
    <Link to={`/${props.currentWorkspace}/${props.project.id}`}>
      <span>{props.project.title}</span>
    </Link>
  </li>
);

export default ProjectIndexItem;
