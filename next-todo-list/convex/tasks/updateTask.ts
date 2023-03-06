import { GenericId } from "convex/values";
import { TaskData, User } from "../../app/config/interfaceTypes";
import { taskPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { mutation } from "../_generated/server";

export default mutation(
  async (
    { db },
    updateTaskData: { documentId: GenericId<string>; taskData: TaskData },
    user: User | undefined
  ) => {
    protect(user, taskPermissions.UPDATE_TASKS);

    const { documentId } = updateTaskData;
    const { title, description, status, isPrivate, date } =
      updateTaskData.taskData;
    const res = db.patch(documentId, {
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
  }
);
