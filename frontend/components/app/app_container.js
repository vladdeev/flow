import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllWorkspaces, fetchInitialWorkspace } from '../../actions/workspace_actions'
import App from './app';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  currentWorkspace: state.workspace.currentWorkspace,
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
  fetchInitialWorkspace: () => dispatch(fetchInitialWorkspace()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
