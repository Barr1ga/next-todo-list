import { User } from "../../app/config/interfaceTypes";
import { tagPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { query } from "../_generated/server";

export default query(async ({ db }, user: User) => {
  protect(user, tagPermissions.READ_TAGS);

  const res = await db.query("tags").collect();

  if (!res) {
    throw new Error("Failed to create data!");
  }

  return res;
});