```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createTask: {errors: []},
    addComment: {errors: []}
  },
  workspaces: {
    1: {
      id: 1,
      title: 'initial workspace'
  },
  projects: {
    1: {
      id: 1,
      title: 'First Project',
      description: "",
      workspace_id: 1
  },
  tasks: {
    1: {
      id: 1,
      title: 'First task'
      description: 'Description for the first task'
      author_id: 1,
      project_id: 1,
      workspace_id: 1,
      completed: false
      comments: {
        1: {
          id: 1,
          body: "Comment"
          task_id: 1,
          author_id: 1,
    }
  }
}
```
