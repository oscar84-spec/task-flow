import { create } from "zustand";

interface ShowModalState {
  isOpenModal: boolean;
  handleToggleModal: () => void;
}

export const useShowModalStore = create<ShowModalState>((set) => ({
  isOpenModal: false,
  handleToggleModal: () =>
    set((state) => ({ isOpenModal: !state.isOpenModal })),
}));
