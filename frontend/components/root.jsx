import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkspaceContainer from './workspace/workspace_container';
import ProjectShowContainer from './project/project_show_container';
import DemoLoginContainer from './demo_login/demo_login_container'
import {
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from '../actions/workspace_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedInAndWorkspace = (ownProps) => {
    const curretState = store.getState();
    const currentUser = curretState.session.currentUser;
    const currentWorkspace = curretState.workspace.currentWorkspace;
    const workspacesListIds = Object.keys(curretState.workspace.workspacesList);
    const workspaceId = ownProps.params.workspaceId;
    const projectId = ownProps.params.projectId;
    const currentProject = curretState.project.currentProject;
    const projectsListIds = Object.keys(curretState.project.projectsList);

    if(!currentUser) {
      hashHistory.replace('/');
    } else if (!workspacesListIds.includes(workspaceId)) {
      hashHistory.push(`/${currentWorkspace}`);
    } else {
      store.dispatch(fetchWorkspace(workspaceId));
    }

    // if (projectId) {
    //   if(!projectsListIds.includes(projectId)) {
    //     hashHistory.push(`/`);
    //   } else {
    //     store.dispatch(fetchProject(workspaceId, projectId));
    //   }
    // }
  }

 return (
   <Provider store={ store }>
     <Router history={ hashHistory }>
       <Route path="/" component={ AppContainer }>
         <IndexRoute component={WorkspaceContainer}/>
         <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/demologin" component={DemoLoginContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/:workspaceId" component={WorkspaceContainer} onEnter={_ensureLoggedInAndWorkspace}>
          <Route path=':projectId' component={ProjectShowContainer} onEnter={_ensureLoggedInAndWorkspace}/>
         </Route>
       </Route>
     </Router>
   </Provider>
 );
};

export default  Root;
