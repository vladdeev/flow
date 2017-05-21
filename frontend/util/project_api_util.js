export const fetchAllProjects = workspaceId => (
  $.ajax({
    method: 'GET',
    url: `api/workspaces/${workspaceId}/projects`
  })
);

export const fetchProject = (workspaceId, projectIdd) => (
  $.ajax({
    method: 'GET',
    url: `api/workspaces/${workspaceId}/projects/${projectIdd}`
  })
);

export const createProject = (workspaceId, project) => (
  $.ajax({
    method: 'POST',
    url: `api/workspaces/${workspaceId}/projects`,
    data: { project }
  })
);

export const updateProject = (workspaceId, project) => (
  $.ajax({
    method: 'PATCH',
    url: `api/workspaces/${workspaceId}/projects/${project.id}`,
    data: { project }
  })
);

export const deleteProject = (workspaceId, projectIdd) => (
  $.ajax({
    method: 'DELETE',
    url: `api/workspaces/${workspaceId}/projects/${projectIdd}`
  })
);
