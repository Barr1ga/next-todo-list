/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as tags_createTag from "../tags/createTag";
import type * as tags_deleteTag from "../tags/deleteTag";
import type * as tags_getTags from "../tags/getTags";
import type * as tags_updateTag from "../tags/updateTag";
import type * as tasks_createTask from "../tasks/createTask";
import type * as tasks_deleteTask from "../tasks/deleteTask";
import type * as tasks_getTasks from "../tasks/getTasks";
import type * as tasks_updateTask from "../tasks/updateTask";
import type * as users_getUsers from "../users/getUsers";
import type * as utils_permissions from "../utils/permissions";
import type * as utils_protect from "../utils/protect";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  "tags/createTag": typeof tags_createTag;
  "tags/deleteTag": typeof tags_deleteTag;
  "tags/getTags": typeof tags_getTags;
  "tags/updateTag": typeof tags_updateTag;
  "tasks/createTask": typeof tasks_createTask;
  "tasks/deleteTask": typeof tasks_deleteTask;
  "tasks/getTasks": typeof tasks_getTasks;
  "tasks/updateTask": typeof tasks_updateTask;
  "users/getUsers": typeof users_getUsers;
  "utils/permissions": typeof utils_permissions;
  "utils/protect": typeof utils_protect;
}>;
