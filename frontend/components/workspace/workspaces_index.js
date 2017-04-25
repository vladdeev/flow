import React from 'react';
import { Link } from 'react-router';

const WorkspacesIndex = ({ workspacesList }) => (
  <section className="wslist">
    <ul>
      {Object.values(workspacesList).map(workspace => (
        <li key={workspace.id}>
          <Link to={`/${workspace.id}`}>{workspace.title}</Link>
        </li>
      ))}
    </ul>
  </section>
)

export default WorkspacesIndex;
