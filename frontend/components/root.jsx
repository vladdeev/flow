import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkspaceContainer from './workspace/workspace_container';
import {
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from '../actions/workspace_actions';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedInAndFetchWorkSpaces = (ownProps) => {
    const curretState = store.getState();
    const currentUser = curretState.session.currentUser;
    const currentWorkspace = curretState.workspace.currentWorkspace;
    const workspacesListIds = Object.keys(curretState.workspace.workspacesList);
    const workspaceId = ownProps.params.workspaceId;

    if(!currentUser) {
      hashHistory.replace('/');
    } else if (!currentWorkspace) {
      store.dispatch(fetchAllWorkspaces());
      store.dispatch(fetchInitialWorkspace());
    } else if (!workspacesListIds.includes(workspaceId)) {
      hashHistory.push('/');
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
         <Route path="/:workspaceId" component={WorkspaceContainer} onEnter={_ensureLoggedInAndFetchWorkSpaces} />
       </Route>
     </Router>
   </Provider>
 );
};

export default  Root;
