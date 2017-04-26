import React from 'react';
import { Link } from 'react-router';
import ProjectIndexContainer from '../project/project_index_container';

const closeNav = () => {
    document.getElementById("side-bar").style.width = "0";
};

const WorkspaceSideBar= (props) => (
  <nav className="side-bar" id="side-bar">
    <div className="side-bar-logo group">
      <Link to="/">flow</Link>
      <Link onClick={() => (closeNav())} to="/">&#215;</Link>
    </div>
    <ProjectIndexContainer />

  </nav>
);

export default WorkspaceSideBar;
