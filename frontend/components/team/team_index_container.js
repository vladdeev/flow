import TeamIndex from './team_index';
import { connect } from 'react-redux';
import {
  fetchAllMembers,
  signUpMember
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.team.membersList,
    currentWorkspace: state.workspace.currentWorkspace,
    errors: state.project.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllMembers: () => dispatch(fetchAllMembers()),
  signUpMember: (workspaceId, member) => dispatch(signUpMember(workspaceId, member))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
