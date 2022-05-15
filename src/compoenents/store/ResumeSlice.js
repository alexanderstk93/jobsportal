import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Dwayne Johnson",
  position: "Actor",
  phoneNumber: "0772 651 397",
  email: "dwaynejohnson@contact.com",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

export default resumeSlice.reducer;
