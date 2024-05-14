import { configureStore } from "@reduxjs/toolkit";
import { companySlice, userSlice } from "./features/index.tsx";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    company: companySlice,
    user: userSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
