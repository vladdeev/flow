import * as taskAPIUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  taskId: task.id
});

export const fetchAllTasks = () => dispatch => (
  taskAPIUtil.fetchAllTasks()
    .then(tasks => dispatch(receiveAllTasks(tasks)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchTask = id => dispatch => (
  taskAPIUtil.fetchTask(id)
    .then(task => dispatch(receiveTask(task)),
      err => dispatch(receiveErrors(err.responseJSON)))
);


export const createTask = task => dispatch => (
  taskAPIUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTask = task => dispatch => (
  taskAPIUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteTask = task => dispatch => (
  taskAPIUtil.deleteTask(task)
    .then(task => dispatch(removeTask(task)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
