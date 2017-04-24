import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  currentWorkspace: state.workspace.currentWorkspace
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
