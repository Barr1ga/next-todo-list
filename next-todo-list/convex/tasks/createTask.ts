import { TaskData } from "../../app/config/interfaceTypes";
import { mutation } from "../_generated/server";

export default mutation(async ({ db }, taskData: TaskData) => {
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
