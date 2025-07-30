import { StateCreator } from "zustand";

type AuthState = {
  token: string | null;
  authUser: null | any;
  isAuthenticated: boolean;
};

type AuthAction = {
  setCredentials: (token: string, authUser?: any) => void;
  clearCredentials: () => void;
  setAuthUser: (authUser: any) => void;
};

export type AuthSlice = AuthState & AuthAction;

const initialState: AuthState = {
  token: null,
  authUser: null,
  isAuthenticated: false,
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setCredentials: () => {},
  clearCredentials: () => {},
  setAuthUser: () => {},
});

export default createAuthSlice;
