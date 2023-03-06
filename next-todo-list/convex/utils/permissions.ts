// tasks
export const taskPermissions = {
  CREATE_TASKS: "CREATE_TASKS",
  READ_NON_PRIVATE_TASKS: "READ_NON_PRIVATE_TASKS",
  READ_PRIVATE_TASKS: "READ_PRIVATE_TASKS",
  UPDATE_TASKS: "UPDATE_TASKS",
  DELETE_TASKS: "DELETE_TASKS",
};

export const tagPermissions = {
  CREATE_TAGS: "CREATE_TAGS",
  READ_TAGS: "READ_TAGS",
  UPDATE_TAGS: "UPDATE_TAGS",
  DELETE_TAGS: "DELETE_TAGS",
};

export const guest = [
  taskPermissions.READ_NON_PRIVATE_TASKS,
  tagPermissions.READ_TAGS,
];

export const collaborator = [
  // tasks
  ...guest,
  taskPermissions.CREATE_TASKS,
  taskPermissions.READ_PRIVATE_TASKS,
  taskPermissions.UPDATE_TASKS,
];

export const administrator = [
  ...collaborator,
  // tasks
  taskPermissions.DELETE_TASKS,

  // tags
  tagPermissions.CREATE_TAGS,
  tagPermissions.UPDATE_TAGS,
  tagPermissions.DELETE_TAGS,
];
