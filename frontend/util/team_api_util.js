export const signUpMember = (workspaceId, member) => {
  return $.ajax({
    method: 'POST',
    url: `join/${workspaceId}`,
    data: { member }
  });
};

export const fetchAllMembers = (workspaceId) => {
  return $.ajax({
    method: "GET",
    url: `/api/workspaces/${workspaceId}/users`,
  });
};
