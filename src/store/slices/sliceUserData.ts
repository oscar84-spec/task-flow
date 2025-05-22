import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserDataStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
