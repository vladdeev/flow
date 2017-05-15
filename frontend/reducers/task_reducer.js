import { merge } from 'lodash';
import {
  RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_TASK
} from '../actions/task_actions';

const _defaultState = {
  currentTask: {},
  tasksList: {},
  errors: []
};

const taskReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      const tasksList = action.tasks;
      return Object.assign({}, oldState, { tasksList });
    case RECEIVE_TASK:
      return merge({}, oldState, { tasksList: { [action.task.id]: action.task }});
    case RECEIVE_CURRENT_TASK:
      return Object.assign({}, oldState, { currentTask: action.task });
    case REMOVE_TASK:
      let newState = merge({}, oldState);
      delete newState["tasksList"][action.taskId];
      return newState;
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  }
};

export default taskReducer;
