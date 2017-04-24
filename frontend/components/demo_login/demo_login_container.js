import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import { fetchAllWorkspaces, fetchInitialWorkspace } from '../../actions/workspace_actions'
import DemoLogin from './demo_login';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentWorkspace: state.workspace.currentWorkspace,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    login: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
    fetchInitialWorkspace: () => dispatch(fetchInitialWorkspace()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoLogin);
