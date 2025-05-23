import api from "./http";
import type { Board } from "../types/BoardType";

export const createBoard = async (data: Board) => {
  return await api.post("/boards", data);
};
