import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app/app_container';
import SessionFormContainer from './session_form/session_form_container';
import WorkspaceContainer from './workspace/workspace_container';

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

 return (
   <Provider store={ store }>
     <Router history={ hashHistory }>
       <Route path="/" component={ AppContainer }>
         <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
         <Route path="/:workspaceId" component={WorkspaceContainer} onEnter={_ensureLoggedIn} />
       </Route>
     </Router>
   </Provider>
 );
};

export default  Root;
