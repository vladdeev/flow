# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
created_at      | datetime  | not null
updated_at      | datetime  | not null

## workspaces
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique
creator_id      | integer   | not null, indexed
created_at      | datetime  | not null
updated_at      | datetime  | not null

## workspacings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
workspace_id    | integer   | not null, indexed

## projects
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
description   | string    | not null
creator_id    | integer   | not null, indexed
workspace_id  | integer   | not null, indexed
created_at    | datetime  | not null
updated_at    | datetime  | not null

## tasks
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null, indexed
description   | string    |
due_date      | date      |
author_id     | integer   | not null, indexed
assignee_id   | integer   | indexed
project_id    | integer   |
workspace_id  | integer   | not null
completed     | boolean   |
completed_at  | datetime  |
created_at    | datetime  | not null
updated_at    | datetime  | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
task_id     | integer   | not null, indexed
author_id   | integer   | not null, indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null
