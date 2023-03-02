export interface Status {
  BACKLOG: string;
  TODO: string;
  IN_PROGRESS: string;
  DONE: string;
  CANCELLED: string;
}

export interface Tag {
  uid: string;
  name: string;
  color: string;
}

export type Task = {
  title: string;
  description: string;
  status: string;
  tags: string[];
  isPrivate: boolean;
  date: string;
}

export interface Board {
  boardName: string;
  tasks: Task[];
}
