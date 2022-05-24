import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "Dwayne Johnson",
  position: "Actor",
  phoneNumber: "0772 651 397",
  email: "dwaynejohnson@contact.com",
  description:
    "Dwayne Douglas Johnson, also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide, making him one of the world's highest-grossing and highest-paid actors.",
  workExperience: [
    {
      id: uuidv4(),
      jobName: "Actor",
      companyName: "20 Century Movies",
      city: "Chicago",
      jobDescription:
        "dddddddassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
    {
      id: uuidv4(),
      jobName: "Actor",
      companyName: "20 Century Movies",
      city: "Chicago",
      jobDescription:
        "dddddddassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    },
  ],
  study: [
    {
      university: "Universitatea Spiru Haret",
      start: "22-07-2018",
      end: "22-07-2021",
      studyDescription: "",
    },
  ],
  abilities: [],
  languagesKnown: [],
  addSection: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    editDescription: (state, action) => {
      state.description = action.payload;
    },
    addWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },
    editWorkExperience: (state, action) => {
      const experienceIndex = state.workExperience.findIndex(
        (experience) => experience.id === action.payload.id
      );

      const experienceInstance = state.workExperience[experienceIndex];

      experienceInstance.jobName = action.payload.jobName
        ? action.payload.jobName
        : null;
      experienceInstance.companyName = action.payload.companyName
        ? action.payload.companyName
        : null;
      experienceInstance.city = action.payload.city
        ? action.payload.city
        : null;
      experienceInstance.jobDescription = action.payload.jobDescription
        ? action.payload.jobDescription
        : null;
    },
    removeWorkExperience: (state, action) => {
      state.workExperience = state.workExperience.filter(
        (experience) => experience.id !== action.payload
      );
    },
  },
});
export const {
  editDescription,
  editWorkExperience,
  removeWorkExperience,
  addWorkExperience,
} = resumeSlice.actions;
export default resumeSlice.reducer;
