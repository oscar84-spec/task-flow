import { create } from "zustand";

interface ShowAddListState {
  isOpenAddList: boolean;
  handleToggleAddList: () => void;
}

export const useShowAddListStore = create<ShowAddListState>((set) => ({
  isOpenAddList: false,
  handleToggleAddList: () =>
    set((state) => ({ isOpenAddList: !state.isOpenAddList })),
}));
