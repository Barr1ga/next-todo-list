import { GenericId } from "convex/values";
import { TaskData } from "../../app/config/interfaceTypes";
import { mutation } from "../_generated/server";

export default mutation(
  async (
    { db },
    updateTaskData: { documentId: GenericId<string>; taskData: TaskData }
  ) => {
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
