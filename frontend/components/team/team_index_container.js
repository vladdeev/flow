import TeamIndex from './team_index';
import { connect } from 'react-redux';
import {
  fetchAllMembers,
  signUpMember,
  receiveErrors
} from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.team.membersList,
    currentWorkspace: state.workspace.currentWorkspace,
    errors: state.team.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllMembers: (workspaceId) => dispatch(fetchAllMembers(workspaceId)),
  signUpMember: (workspaceId, member) =>
    dispatch(signUpMember(workspaceId, member)),
  receiveErrors: () => dispatch(receiveErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
