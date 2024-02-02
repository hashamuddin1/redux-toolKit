import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
