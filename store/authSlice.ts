import {
  deleteAccessToken,
  getAccessToken,
  saveAccessToken,
} from "@/utils/secureStore";
import { jwtDecode } from "jwt-decode";
import { StateCreator } from "zustand";

type AuthState = {
  token: string | null;
  authUser: null | any;
  isAuthenticated: boolean;
};

type AuthAction = {
  setCredentials: (token: string) => Promise<void>;
  clearCredentials: () => Promise<void>;
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
    console.log("set credential token", token);

    await saveAccessToken(token);
    const authUser: any = jwtDecode(token);
    set({ token, authUser: authUser.userInfo, isAuthenticated: true });
  },
  clearCredentials: async () => {
    await deleteAccessToken();
    set(initialState);
  },
  loadAccessToken: async () => {
    const token = await getAccessToken();
    console.log(token);

    if (token) {
      const authUser: any = jwtDecode(token);
      set({ token, authUser: authUser.userInfo, isAuthenticated: true });
    }
  },
});

export default createAuthSlice;
