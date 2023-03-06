import {
  tagPermissions,
} from "./../utils/permissions";
import { TagData, User } from "../../app/config/interfaceTypes";
import { mutation } from "../_generated/server";
import protect from "../utils/protect";

export default mutation(
  async ({ db }, tagData: TagData, user: User | undefined) => {
    protect(user, tagPermissions.CREATE_TAGS);

    const { name, color } = tagData;
    const res = db.insert("tags", {
      name,
      color,
    });

    if (!res) {
      throw new Error("Failed to create data!");
    }

    return res;
  }
);
