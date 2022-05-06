import { createSlice } from "@reduxjs/toolkit";

const initialState = { applied: false, appliedTo: "", search: "" };

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.applied = !state.applied;
    },
    changeApplied: (state, action) => {
      state.appliedTo = action.payload.title;
    },
    changeSearch: (state, action) => {
      state.search = action.payload.search;
      console.log(action.payload.search);
    },
  },
});

export const { changeStatus, changeApplied, changeSearch } =
  statusSlice.actions;
export default statusSlice.reducer;