import { connect } from 'react-redux';
import Workspace from './workspace';
import {
  fetchAllWorkspaces,
  fetchWorkspace,
  fetchInitialWorkspace,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace
} from '../../actions/workspace_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentWorkspace: state.wcurrentWorkspace,
    workspacesList: state.workspace.workspacesList,
    errors: state.workspace.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
  fetchInitialWorkspace: () => dispatch(fetchInitialWorkspace()),
  fetchWorkspace: (id) => dispatch(fetchWorkspace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
