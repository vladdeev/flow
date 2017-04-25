import { merge } from 'lodash';
import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_INITIAL_PROJECT,
  RECEIVE_PROJECT,
  RECEIVE_NEW_PROJECT,
  REMOVE_PROJECT,
  RECEIVE_ERRORS
} from '../actions/project_actions';

const _defaultState = {
  currentProject: "",
  projectsList: {},
  errors: []
};

const projectReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      const projectsList = action.projects;
      return Object.assign({}, oldState, { projectsList });
    case RECEIVE_NEW_PROJECT:
      return merge({}, oldState, { projectsList: { [action.project.id]: action.project }});
    case RECEIVE_PROJECT:
      return Object.assign({}, oldState, { currentProject: action.project.id });
    case RECEIVE_INITIAL_PROJECT:
      return Object.assign({}, oldState, { currentProject: action.project.id });
    case REMOVE_PROJECT:
      let newState = merge({}, oldState);
      delete newState["projectsList"][action.projectId];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default projectReducer;
