import WorkspaceSideBar from './workspace_side_bar';
import { connect } from 'react-redux';
import {
  receiveErrors,
  createProject
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentWorkspace: state.workspace.currentWorkspace,
    errors: state.project.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  createProject: (workspace_id, project) => dispatch(createProject(workspace_id, project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceSideBar);
