import { query } from "../_generated/server";

export default query(async ({ db }) => {
  const res = await db.query("users").collect();

  if (!res) {
    throw new Error("Failed to create data!");
  }

  return res;
});