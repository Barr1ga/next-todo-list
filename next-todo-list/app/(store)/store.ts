import { User } from "./../config/interfaceTypes";
import { GenericId } from "convex/values";
import { create } from "zustand";

interface WorkspaceState {
  // auth
  signedInUser: User | undefined;
  logInUser: (userId: User) => void;

  // filters
  searchFilter: string;
  updateSearchFilter: (search: string) => void;

  tagFilter: boolean;
  selectedTagFilter: GenericId<string> | undefined;
  updateTagFilter: (status: boolean) => void;
  selectTagFilter: (tagId: GenericId<string> | undefined) => void;

  orderFilter: string;
  updateOrderFilter: (order: string) => void;
}

const useStore = create<WorkspaceState>()((set) => ({
  // auth
  signedInUser: undefined,
  logInUser: (userId) => set(() => ({ signedInUser: userId })),

  // filters
  searchFilter: "",
  updateSearchFilter: (search) => set(() => ({ searchFilter: search })),

  tagFilter: false,
  selectedTagFilter: undefined,
  updateTagFilter: (status) => set(() => ({ tagFilter: status })),
  selectTagFilter: (tagId) => set(() => ({ selectedTagFilter: tagId })),

  orderFilter: "None",
  updateOrderFilter: (order) => set(() => ({ orderFilter: order })),
}));

export default useStore;
