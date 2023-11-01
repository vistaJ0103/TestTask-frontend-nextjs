import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { IUser } from "../../types";

export interface UserListState {
    userlist: IUser[];
}

const initialState: UserListState = {
    userlist: [],
};

export const userListSlice = createSlice({
    name: "userlist",
    initialState,
    reducers: {
        initPosts: (state) => {
            state.userlist = [];
        },

        updateUserList: (state, action) => {
            state.userlist = action.payload;
        },

    },
});

export const {
    initPosts,
    updateUserList,
} = userListSlice.actions;
export const selectUsers = (state: RootState) => state.userlist.userlist;
export default userListSlice.reducer;
