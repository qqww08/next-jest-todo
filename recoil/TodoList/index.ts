import { atom } from "recoil";

export interface ITodo {
  id: number;
  name: string;
  checked: boolean;
}
const todoState = atom<ITodo[]>({
  key: "todoState",
  default: [],
});
export default todoState;
