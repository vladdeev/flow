import TeamIndex from './team_index';
import { connect } from 'react-redux';
import {
  fetchAllMembers,
  signUpMember
} from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.team.membersList,
    currentWorkspace: state.workspace.currentWorkspace,
    errors: state.project.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllMembers: (workspaceId) => dispatch(fetchAllMembers(workspaceId)),
  signUpMember: (workspaceId, member) =>
    dispatch(signUpMember(workspaceId, member))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
