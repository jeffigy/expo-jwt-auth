import { StateCreator } from "zustand";
import {
  deleteAccessToken,
  getAccessToken,
  saveAccessToken,
} from "../utils/secureStore";

type AuthState = {
  token: string | null;
  authUser: null | any;
  isAuthenticated: boolean;
};

type AuthAction = {
  setCredentials: (token: string, authUser?: any) => Promise<void>;
  clearCredentials: () => Promise<void>;
  setAuthUser: (authUser: any) => void;
  loadAccessToken: () => Promise<void>;
};

export type AuthSlice = AuthState & AuthAction;

const initialState: AuthState = {
  token: null,
  authUser: null,
  isAuthenticated: false,
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setCredentials: async (token) => {
    await saveAccessToken(token);
    set({ token });
  },
  clearCredentials: async () => {
    await deleteAccessToken();
    set({ token: null });
  },
  setAuthUser: () => {},
  loadAccessToken: async () => {
    const token = await getAccessToken();
    if (token) set({ token });
  },
});

export default createAuthSlice;
