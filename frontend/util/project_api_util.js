export const fetchAllProjects = (workspace_id) => (
  $.ajax({
    method: 'GET',
    url: `api/workspaces/${workspace_id}/projects`
  })
);

export const fetchProject = (workspace_id, project_id) => (
  $.ajax({
    method: 'GET',
    url: `api/workspaces/${workspace_id}/projects/${project_id}`
  })
);

export const createProject = (workspace_id, project) => (
  $.ajax({
    method: 'POST',
    url: `api/workspaces/${workspace_id}/projects`,
    data: { project }
  })
);

export const updateProject = (workspace_id, project) => (
  $.ajax({
    method: 'PATCH',
    url: `api/workspaces/${workspace_id}/projects/${project.id}`,
    data: { project }
  })
);

export const deleteProject = (workspace_id, project_id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/workspaces/${workspace_id}/projects/${project_id}`
  })
);
