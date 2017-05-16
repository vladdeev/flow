import * as teamAPIUtil from '../util/team_api_util';

export const RECEIVE_ALL_MEMBERS = "RECEIVE_ALL_MEMBERS";
export const RECEIVE_MEMBER = "RECEIVE_MEMBER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllMembers = members => ({
  type: RECEIVE_ALL_MEMBERS,
  members
});

export const receiveMember = member => ({
  type: RECEIVE_MEMBER,
  member
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAllMembers = workspaceId => dispatch => (
  teamAPIUtil.fetchAllMembers(workspaceId)
    .then(members => dispatch(receiveAllMembers(members)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const signUpMember = (workspaceId, member) => dispatch => (
  teamAPIUtil.signUpMember(workspaceId, member)
  .then(recievedMember => dispatch(receiveMember(recievedMember)),
    err => dispatch(receiveErrors(err.responseJSON)))
);
