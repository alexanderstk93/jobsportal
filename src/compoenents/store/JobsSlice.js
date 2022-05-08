import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { topEmployers } from "./TopEmployers";

const STK_INDUSTRY = "STK Industry";
const AMAZON = "Amazon";
const MICROSOFT = "Microsoft";

const isTopEmployer = (employer) => {
  return topEmployers.includes(employer);
};

const initialState = [
  {
    id: uuidv4(),
    employer: STK_INDUSTRY,
    topEmployer: isTopEmployer(STK_INDUSTRY),
    title: "React Developer Wanted",
    description: `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      Here are our requirements: 
      - React JS Knowledge
      - HTML/CSS
      - Seriosity
      - 3 years experience`,
    level: { junior: true, middle: true, senior: false },
    location: { lat: 44.4777, lng: 26.0805 },
  },
  {
    id: uuidv4(),
    employer: AMAZON,
    topEmployer: isTopEmployer(AMAZON),
    title: "PHP Backend Developer",
    description:
      `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      ` +
      "Here are our requirements: - PHP Knowledge - HTML/CSS - Seriosity - 2 years experience",
    level: { junior: false, middle: false, senior: true },
  },
  {
    id: uuidv4(),
    employer: MICROSOFT,
    topEmployer: isTopEmployer(MICROSOFT),
    title: "QA Tester",
    description: `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      Here are our requirements: 
      - Testing Knowledge
      - HTML/CSS
      - Seriosity
      - 1 year experience`,
    level: { junior: false, middle: false, senior: true },
  },
  {
    id: uuidv4(),
    employer: STK_INDUSTRY,
    topEmployer: isTopEmployer(STK_INDUSTRY),
    title: "Javascript Internship",
    description: `Join now our team of motivated developers to create products that impact the world. 
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      Here are our requirements: 
      - JS Knowledge
      - HTML/CSS
      - Seriosity
      - 1 year experience`,
    level: { junior: true, middle: true, senior: false },
  },
];

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    removeJob: (state, action) => {
      const newState = state.filter((job) => job.id !== action.payload.id);
      return newState;
    },
  },
});

export const { addJob, removeJob } = jobsSlice.actions;

export default jobsSlice.reducer;
