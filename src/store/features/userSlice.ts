import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { basicResponseEntity, Break, UserState } from "../../types";
import axios from "axios";
import userController from "../../config/UserController";
import { ShiftSaveRequestDto, BreakSaveRequestDto } from "../../types";

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
      const response: basicResponseEntity = await axios.get(
        userController.list
      );
      return response.data;
    } catch (error) {
      // Handle error here if needed
      console.log("ERROR: user/fetchGetAllUsers...:" + error);
    }
  }
);

export const fetchUserListForGivenIds = createAsyncThunk(
  "user/fetchUserListForGivenIds",
  async (payload: string[]) => {
    try {
      const response: basicResponseEntity = await axios.post(
        userController.findAllUsersForGivenIds,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("ERROR: user/fetchUserListForGivenIds...:" + error);
    }
  }
);
export const fetchAssignShifts = createAsyncThunk(
  "user/fetchAssignShifts",
  async (payload: ShiftSaveRequestDto) => {
    try {
      const response: basicResponseEntity = await axios.post(
        userController.addShift,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("ERROR: user/fetchAssignShift...:" + error);
    }
  }
);
export const fetchAssignBreak = createAsyncThunk(
  "user/fetchAssignShifts",
  async (payload: BreakSaveRequestDto) => {
    try {
      const response: basicResponseEntity = await axios.post(
        userController.addBreak,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("ERROR: user/fetchAssignBreak...:" + error);
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
    build.addCase(fetchUserListForGivenIds.fulfilled, (state, action) => {
      state.userList = action.payload.data;
    });
    build.addCase(fetchUserListForGivenIds.pending, (state) => {
      state.isLoadingFetchGetAllUsers = false;
    });
  },
});

export default userSlice.reducer;
