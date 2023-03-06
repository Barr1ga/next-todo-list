import { User } from "../../app/config/interfaceTypes";
import { taskPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { query } from "../_generated/server";

export default query(async ({ db }, user: User | undefined) => {
  if (user?.userType === "Guest") {
    protect(user, taskPermissions.READ_NON_PRIVATE_TASKS);
  } else {
    protect(user, taskPermissions.READ_NON_PRIVATE_TASKS);
    protect(user, taskPermissions.READ_PRIVATE_TASKS);
  }

  const res = await db.query("tasks").collect();

  if (!res) {
    throw new Error("Failed to create data!");
  }

  return res;
});
