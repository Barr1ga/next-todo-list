import { GenericId } from "convex/values";

export interface Status {
  BACKLOG: string;
  TODO: string;
  IN_PROGRESS: string;
  DONE: string;
  CANCELLED: string;
}

export interface Tag {
  _id: GenericId<string>;
  name: string;
  color: string;
  tasks: GenericId<string>[];
  _creationTime: number;
}

export interface TagData {
  name: string;
  color: string;
  tasks: GenericId<string>[];
}

export interface TaskData {
  title: string;
  description: string;
  status: string;
  isPrivate: boolean;
  date: string;
}

export interface Task {
  _id: GenericId<string>;
  title: string;
  description: string;
  status: string;
  isPrivate: boolean;
  date: string;
  _creationTime: number;
}

export interface Board {
  boardName: string;
  tasks: Task[];
}

export interface User {
  email: string,
  userType: string,
}
