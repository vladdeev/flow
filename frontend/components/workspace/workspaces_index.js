import React from 'react';
import { Link, hashHistory } from 'react-router';


const WorkspacesIndex = ({ workspacesList, redirectToWorkspace }) => (
  <section className="wslist">
    <ul>
      {Object.values(workspacesList).map(workspace => (
        <li key={workspace.id}>
          <h3 onClick={() => redirectToWorkspace(workspace.id)} >{workspace.title}</h3>
        </li>
      ))}
    </ul>
  </section>
)

export default WorkspacesIndex;
