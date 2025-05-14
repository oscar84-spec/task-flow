import { create } from "zustand";

interface ShowPasswordState {
  isVisible: boolean;
  handleToggleShowPassword: () => void;
}

export const useShowPasswordStore = create<ShowPasswordState>((set) => ({
  isVisible: false,
  handleToggleShowPassword: () =>
    set((state) => ({ isVisible: !state.isVisible })),
}));
