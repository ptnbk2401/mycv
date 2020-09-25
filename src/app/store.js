import { configureStore } from "@reduxjs/toolkit";
import introductionReducer from '../features/home/introductionSlice'

const rootReducer = {
  introduction: introductionReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;