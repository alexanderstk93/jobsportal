import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applied: false,
  appliedTo: "",
  search: [],
};

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
    },
    addKeyWord: (state, action) => {
      console.log("da");
      const filterCheck = state.search.filter(
        (keyWord) => keyWord === action.payload.keyWord
      );
      if (filterCheck.length === 0) state.search.push(action.payload.keyWord);
    },

    deleteKeyWord: (state, action) => {
      const index = state.search.indexOf(action.payload.keyWord.toLowerCase());

      state.search = state.search.filter(
        (key) => key !== action.payload.keyWord.toLowerCase()
      );
    },
  },
});

export const {
  changeStatus,
  changeApplied,
  changeSearch,
  deleteKeyWord,
  addKeyWord,
} = statusSlice.actions;
export default statusSlice.reducer;
