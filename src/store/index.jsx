import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
