import { connect } from 'react-redux';
import Workspace from './workspace';
import { logout } from '../../actions/session_actions';//logout
import {
  receiveAllWorkspaces, //logout
  receiveWorkspace,//logout
  receiveErrors,//logout
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from '../../actions/workspace_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    currentWorkspace: state.workspace.currentWorkspace,
    workspacesList: state.workspace.workspacesList,
    errors: state.workspace.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),//logout
  receiveAllWorkspaces: (workspaces) => dispatch(receiveAllWorkspaces(workspaces)),//logout
  receiveWorkspace: (workspace) => dispatch(receiveWorkspace(workspace)),//logout
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),//logout
  fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
  fetchInitialWorkspace: () => dispatch(fetchInitialWorkspace()),
  fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
  createWorkspace: (workspace) => dispatch(createWorkspace(workspace))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
