import { create } from "zustand";

interface ShowAccountMenuState {
  isOpenAccountMenu: boolean;
  handleToggleShowAccountMenu: () => void;
}

export const useShowAccountMenuStore = create<ShowAccountMenuState>((set) => ({
  isOpenAccountMenu: false,
  handleToggleShowAccountMenu: () =>
    set((state) => ({ isOpenAccountMenu: !state.isOpenAccountMenu })),
}));
