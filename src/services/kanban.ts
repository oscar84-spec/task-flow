import api from "./http";
import type { Board } from "../types/BoardType";

export const getBoardsById = async (userId: string) => {
  return await api.get(`/boards/${userId}`);
};

export const createBoard = async (data: Board) => {
  return await api.post("/boards", data);
};
