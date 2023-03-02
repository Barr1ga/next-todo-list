import { Task } from "../../app/config/interfaceTypes";
import { mutation } from "../_generated/server";

export default mutation(async ({ db }, taskData: Task) => {
  return db.insert("tasks", { taskData });
});
