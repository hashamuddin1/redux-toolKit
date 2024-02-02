import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const data = action.payload;
      state.splice(data.id, 1);
    },
    deleteUsers(state, action) {},
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
export const { removeUser } = userSlice.actions;
