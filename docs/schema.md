# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## workspaces
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title             | string    | not null, indexed, unique

## workspacings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
workspace_id    | integer   | not null, indexed

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    | not null
workspace_id| integer   | not null, indexed

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | string    |
due_date    | date      |
author_id   | integer   | not null, indexed
assignee_id | integer   | indexed
project_id  | integer   | not null, indexed
workspace_id| integer   | not null, indexed
completed   | boolean   |
completed_at| datetime  |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
task_id     | integer   | not null, indexed
author_id   | integer   | not null, indexed
