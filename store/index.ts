import { Store } from "@/types/store";
import { create } from "zustand";
import createAuthSlice from "./authSlice";

const useStore = create<Store>()((...a) => ({
  ...createAuthSlice(...a),
}));

export default useStore;
