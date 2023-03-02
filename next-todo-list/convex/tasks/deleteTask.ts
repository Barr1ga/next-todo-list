import { mutation } from "../_generated/server";

export default mutation(async ({ db }, taskData) => {
  return db.insert("tasks", { taskData });
}); 