import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkspaceContainer from './workspace/workspace_container';
// import ProjectContainer from './project/project_container';
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

    if(!currentUser) {
      hashHistory.replace('/');
    } else if (!workspacesListIds.includes(workspaceId)) {
      hashHistory.push(`/${currentWorkspace}`);
    } else {
      store.dispatch(fetchWorkspace(workspaceId));
    }
  }

 return (
   <Provider store={ store }>
     <Router history={ hashHistory }>
       <Route path="/" component={ AppContainer }>
         <IndexRoute component={WorkspaceContainer}/>
         <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/:workspaceId" component={WorkspaceContainer} onEnter={_ensureLoggedInAndWorkspace}>
         </Route>
       </Route>
     </Router>
   </Provider>
 );
};

export default  Root;
// <Route path=':projectId' component={ProjectContainer} />
