import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applied: false,
  changesSaved: false,
  appliedTo: "",
  search: [],
  introStatus: false,
  width: window.innerWidth,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.applied = action.payload;
    },
    changeApplied: (state, action) => {
      state.appliedTo = action.payload.title;
    },
    switchChangesSaved: (state, action) => {
      state.changesSaved = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload.search;
    },
    addKeyWord: (state, action) => {
      let filterCheck = [];
      if (state.search.length > 1) {
        filterCheck = state.search.filter(
          (keyWord) => keyWord === action.payload.keyWord
        );
      }
      if (filterCheck.length === 0) state.search.push(action.payload.keyWord);
    },

    deleteKeyWord: (state, action) => {
      const index = state.search.indexOf(action.payload.keyWord.toLowerCase());

      state.search = state.search.filter(
        (key) => key !== action.payload.keyWord.toLowerCase()
      );
    },
    setIntroStatus: (state, action) => {
      state.introStatus = true;
    },
    setWitdth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const {
  changeStatus,
  changeApplied,
  switchChangesSaved,
  changeSearch,
  deleteKeyWord,
  addKeyWord,
  setIntroStatus,
  setWitdth,
} = statusSlice.actions;
export default statusSlice.reducer;
