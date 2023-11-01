import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { IUser } from "../../types";

export interface UserState {
  user: IUser;
  isLogin: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    avatar: "",
  },
  isLogin:
    typeof localStorage !== "undefined" && localStorage.getItem("token")
      ? true
      : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state) => {
      state.user = {
        _id: "",
        name: "",
        email: "",
        avatar: "",
      };
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateName: (state, action) => {
      state.user.name = action.payload;
    },
    updateAvatar: (state, action) => {
      return { ...state, user: { ...state.user, avatar: action.payload } };
    },
    logIn: (state, action) => {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isLogin: true,
      };
    },
    logOut: (state) => {
      state.user = {
        _id: "",
        name: "",
        email: "",
        avatar: "",
      };
      state.isLogin = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {},
});

export const {
  initUser,
  updateUser,
  updateName,
  updateAvatar,
  logIn,
  logOut,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
