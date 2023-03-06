import { GenericId } from "convex/values";
import { TagData, User } from "../../app/config/interfaceTypes";
import { tagPermissions } from "../utils/permissions";
import protect from "../utils/protect";
import { mutation } from "../_generated/server";

export default mutation(
  async (
    { db },
    updateTagData: { documentId: GenericId<string>; tagData: TagData },
    user: User | undefined
  ) => {
    protect(user, tagPermissions.UPDATE_TAGS);

    const { documentId } = updateTagData;
    const { name, tasks, color } = updateTagData.tagData;

    const res = db.patch(documentId, {
      name,
      color,
      tasks,
    });

    if (!res) {
      throw new Error("Failed to create data!");
    }

    return res;
  }
);
