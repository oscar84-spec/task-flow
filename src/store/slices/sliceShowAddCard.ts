import { create } from "zustand";

interface ShowAddCardState {
  isOpenAddCard: boolean;
  handleToggleAddCard: () => void;
}

export const useShowAddCardStore = create<ShowAddCardState>((set) => ({
  isOpenAddCard: false,
  handleToggleAddCard: () =>
    set((state) => ({ isOpenAddCard: !state.isOpenAddCard })),
}));
