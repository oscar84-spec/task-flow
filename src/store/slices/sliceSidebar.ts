import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  handleToggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  handleToggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
