import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseResponseEntity, UserState } from "../../types";
import axios from "axios";
import userController from "../../config/UserController";

const userInitialState: UserState = {
  userList: [],
  isLoadingFetchGetAllUsers: false,
  isLoadingFetchCompanyList: false,
};
// TODO TOKENLA ISTEK ATMA ISINI HALLETMEN GEREKIYOR
export const fetchUserList = createAsyncThunk(
  "user/fetchGetAllUsers",
  async () => {
    try {
      const response: baseResponseEntity = await axios.get(userController.list);
      return response.data;
    } catch (error) {
      // Handle error here if needed
      console.log("ERROR: user/fetchGetAllUsers...:" + error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchUserList.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
    build.addCase(fetchUserList.pending, (state) => {
      state.isLoadingFetchGetAllUsers = false;
    });
  },
});

export default userSlice.reducer;
