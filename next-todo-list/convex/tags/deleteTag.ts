import { GenericId } from "convex/values";
import { User } from "../../app/config/interfaceTypes";
import { tagPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { mutation } from "../_generated/server";

export default mutation(
  async ({ db }, documentId: GenericId<string>, user: User) => {
    protect(user, tagPermissions.DELETE_TAGS);

    const res = db.delete(documentId);

    if (!res) {
      throw new Error("Failed to create data!");
    }

    return res;
  }
);
