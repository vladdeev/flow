export const fetchAllComments = taskId => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${taskId}/comments`
  })
);

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/comments/${commentId}`
  })
);

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tasks/comments/${comment.id}`,
    data: { comment }
  })
);

export const createComment = (taskId, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/tasks/${taskId}/comments`,
    data: { comment }
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tasks/comments/${commentId}`
  })
);
