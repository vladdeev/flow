```js
{
  session: {
    currentUser: {
      id: 1,
      email: "robert@westworld.com",
      first_name: "Robert",
      last_name: "Ford"
    }
    errors: []
  },
  forms: {
    createTask: {errors: []},
    addComment: {errors: []}
  },
  workspaces: {
    1: {
      id: 1,
      title: 'Westworld'
    }
  },
  projects: {
    1: {
      id: 1,
      title: 'Construct new narrative',
      description: "",
      workspace_id: 1
    }
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
  }
}
```
