import { configureStore } from "@reduxjs/toolkit";
import introductionReducer from '../features/home/slices/introductionSlice';
import profileReducer from '../features/home/slices/profileSlice';
import projectReducer from '../features/home/slices/projectSlice';
import skillsReducer from '../features/home/slices/skillsSlice';
import contactReducer from '../features/home/slices/contactSlice';

const rootReducer = {
  introduction: introductionReducer,
  profile: profileReducer,
  project: projectReducer,
  skill: skillsReducer,
  contact: contactReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
