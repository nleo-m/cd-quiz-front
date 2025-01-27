import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuizzesService } from "../../services/quiz/getQuizzesService";

const initialState = {
  data: [],
  status: "idle",
};

export const getQuizzes = createAsyncThunk(
  "quiz/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getQuizzesService();

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuizzes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getQuizzes.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default quizzesSlice.reducer;
