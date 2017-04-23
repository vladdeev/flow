import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import { fetchAllWorkspaces, fetchInitialWorkspace } from '../../actions/workspace_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentWorkspace: state.workspace.currentWorkspace,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
    fetchInitialWorkspace: () => dispatch(fetchInitialWorkspace()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
