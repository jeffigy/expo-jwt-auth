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
  setCredentials: (token: string, authUser?: any) => void;
  clearCredentials: () => void;
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
  setCredentials: (token) => {
    saveAccessToken(token), set({ token });
  },
  clearCredentials: () => {
    deleteAccessToken();
    set({ token: null });
  },
  setAuthUser: () => {},
  loadAccessToken: async () => {
    const token = await getAccessToken();
    if (token) set({ token });
  },
});

export default createAuthSlice;
