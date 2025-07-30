import { create } from "zustand";
import { Store } from "../types/store";
import createAuthSlice from "./authSlice";

export default create<Store>()((...a) => ({
  ...createAuthSlice(...a),
}));
