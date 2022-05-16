import { createSlice } from "@reduxjs/toolkit";

const generateTime = () => {
  const date = new Date();
  const hoursAndMinutes = `${date.getHours()}:${date.getMinutes()}`;
  return hoursAndMinutes;
};

const initialState = [
  {
    title: "Welcome back!",
    message: "We hope that you'll find your dream job today.",
    time: generateTime(),
  },
];

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.push({ ...action.payload, time: generateTime() });
    },
  },
});

export const { addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
