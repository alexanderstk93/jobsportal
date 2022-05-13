import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Welcome back!",
    message: "We hope that you'll find your dream job today.",
  },
];

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
