import { GenericId } from "convex/values";
import { mutation } from "../_generated/server";

export default mutation(async ({ db }, documentId: GenericId<string>) => {
  const res = db.delete(documentId);

  if (!res) {
    throw new Error("Failed to create data!");
  }

  return res;
});
