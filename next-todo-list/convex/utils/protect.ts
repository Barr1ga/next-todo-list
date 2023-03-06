import { User } from "../../app/config/interfaceTypes";
import {
  administrator,
  collaborator,
  guest,
} from "./../utils/permissions";

export default function (user: User | undefined, operation: string) {
  if (!user) {
    throw new Error("User not found!");
  }

  if (
    (user.userType === "Administrator" &&
      !administrator.includes(operation)) ||
    (user.userType === "Collaborator" &&
      !collaborator.includes(operation)) ||
    (user.userType === "Guest" && !guest.includes(operation))
  ) {
    throw new Error("Unauthorized user!");
  }
}
