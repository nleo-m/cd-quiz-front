import { combineReducers, configureStore } from "@reduxjs/toolkit";

import quizzesSlice from "./quizzesSlice";
import quizSlice from "./quizSlice";

const rootReducer = combineReducers({
  quizzes: quizzesSlice,
  quiz: quizSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
