import { mutation } from "../_generated/server";

export default mutation(async ({ db }, updateTaskData) => {
  const { documentId, taskData } = updateTaskData;
  return db.patch(documentId, { taskData });
});
