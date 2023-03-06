import { TaskData, User } from "../../app/config/interfaceTypes";
import { taskPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { mutation } from "../_generated/server";

export default mutation(async ({ db }, taskData: TaskData, user: User | undefined) => {
  protect(user, taskPermissions.CREATE_TASKS);

  const { title, description, status, isPrivate, date } = taskData;

  const res = db.insert("tasks", {
    title,
    description,
    status,
    isPrivate,
    date,
  });

  if (!res) {
    throw new Error("Failed to create data!");
  }

  return res;
});
