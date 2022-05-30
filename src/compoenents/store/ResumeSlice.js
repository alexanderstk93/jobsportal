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
      companyName: "World Wrestling Federation/Entertainment",
      city: "Chicago",
      jobDescription: `Johnson made his WWF debut as Rocky Maivia, a combination of his father and grandfather's 
      ring names, although his real name was acknowledged by the announcers. He was initially reluctant to take 
      this ring name but was persuaded by Vince McMahon and Jim Ross. He was given the nickname "The Blue 
      Chipper" and his lineage was played to on TV, where he was hyped as the WWF's first third-generation wrestler.
      Maivia, a clean-cut face character, was pushed heavily from the start despite his wrestling inexperience. 
      He debuted on Monday Night Raw as a member of Marc Mero's entourage on November 4, 1996. His first match 
      came at Survivor Series, on November 17, in an eight-man elimination tag match; he was the sole survivor and 
      
      eliminated the final two members of the opposing team, Crush and Goldust. On February 13, 1997, he won the
      Intercontinental Championship from Hunter Hearst Helmsley on Monday Night Raw. Maivia then 
      successfully defended the title against Helmsley at In Your House 13: Final Four. He had his first 
      WrestleMania match at WrestleMania 13 where he was victorious in his Intercontinental Championship 
      defense against The Sultan. WWF fans started to reject his character and push from the company. 
      He defeated Bret Hart by disqualification in a title defense on the March 31 episode of Raw is War. 
      Behind the scenes, Hart mentored Johnson for his first year in WWF and refused to be booked to take 
      the title from him. On April 20, at In Your House 14: Revenge of the 'Taker, he lost to Savio Vega 
      by countout but retained the title. Audiences became increasingly hostile toward Maivia, with chants of 
      "die, Rocky, die" and "Rocky sucks" being heard during his matches.`,
    },
    {
      id: uuidv4(),
      jobName: "Acting career",
      companyName: " Academy of Motion Picture Arts and Sciences",
      city: "Chicago",
      jobDescription: `Johnson's first big box office success came in 2011, portraying Luke Hobbs in Fast Five 
      (2011), the film became the seventh highest-grossing film of 2011. He became known for reinvigorating film 
      franchises after portraying Marvin F. Hinton / Roadblock in G.I. Joe: Retaliation and reprising his role as 
      Luke Hobbs in Fast & Furious 6 (2013), while also starring in true-story films Pain & Gain (2013) 
      and Empire State (2013). That same year, he hosted and produced the TNT reality competition series The Hero,
       and won the Favorite Male Buttkicker Award at the 2013 Nickelodeon Kid's Choice Awards. In May
       2013, it was announced that he would executive produce and star in Ballers, an HBO comedy-drama series 
       about NFL players living in Miami. By December of that year, Forbes named him the top-grossing actor of 
       2013, with his films bringing in $1.3 billion worldwide for the year. Forbes credited the success of Fast & 
       Furious 6, which grossed $789 million globally, and his frequent acting work as primary reasons for topping 
       the list.`,
    },
  ],
  study: [
    {
      id: uuidv4(),
      university: "University of Miami",
      start: "1991-09-19",
      end: "1995-07-15",
      description: `He was one of UM's most prolific speakers to the community. He frequently spoke to youths, 
      delivering a positive message about staying in school and the dangers of drugs. After graduation, he 
      signed with the Calgary Stampeders of the Canadian Football League as a linebacker. He was assigned to the 
      practice roster but was cut two months into the season.`,
    },
  ],
  abilities: [
    "Good communication skills",
    "Critical thinking",
    "Working well in a team",
    "Self-motivation",
    "Being flexible",
    "Determination and persistence",
    "Quick Leaner",
    "Good time management",
  ],
  languagesKnown: [
    { language: "English", level: "Advanced" },
    { language: "Romanian", level: "Mediocre" },
  ],
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
    addStudy: (state, action) => {
      state.study.push(action.payload);
    },
    editStudy: (state, action) => {
      const studyIndex = state.study.findIndex(
        (study) => study.id === action.payload.id
      );

      const studyInstance = state.study[studyIndex];

      studyInstance.university = action.payload.university
        ? action.payload.university
        : null;
      studyInstance.start = action.payload.start ? action.payload.start : null;
      studyInstance.end = action.payload.end ? action.payload.end : null;
      studyInstance.description = action.payload.description
        ? action.payload.description
        : null;
    },
    addAbility: (state, action) => {
      if (
        state.abilities.filter((ability) => ability === action.payload)
          .length === 0 &&
        action.payload.length > 3
      ) {
        state.abilities.push(action.payload);
      } else {
        window.alert("Ability already added or the length is lower than 4.");
      }
    },
    removeAbility: (state, action) => {
      if (window.confirm("Remove ability?")) {
        state.abilities = state.abilities.filter(
          (ability) => ability !== action.payload
        );
      }
    },
    addLanguage: (state, action) => {
      state.languagesKnown.push(action.payload);
    },
    removeLanguage: (state, action) => {
      state.languagesKnown = state.languagesKnown.filter(
        (language) => language.language !== action.payload
      );
    },
  },
});
export const {
  editDescription,
  editWorkExperience,
  removeWorkExperience,
  addWorkExperience,
  addStudy,
  editStudy,
  addAbility,
  removeAbility,
  addLanguage,
  removeLanguage,
} = resumeSlice.actions;
export default resumeSlice.reducer;
