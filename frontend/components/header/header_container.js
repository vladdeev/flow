import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => {
  return {
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  currentWorkspace: state.workspace.currentWorkspace
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
