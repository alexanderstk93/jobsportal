import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Dwayne Johnson",
  position: "Actor",
  phoneNumber: "0772 651 397",
  email: "dwaynejohnson@contact.com",
  description:
    "Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide, making him one of the world's highest-grossing and highest-paid actors.",
  workExperience: [],
  study: "",
  abilities: "",
  languagesKnown: "",
  addSection: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    editDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});
export const { editDescription } = resumeSlice.actions;
export default resumeSlice.reducer;
