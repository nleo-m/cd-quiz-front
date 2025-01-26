import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getQuizzesService } from "../../services/quiz/getQuizzesService";
import { verifyQuizService } from "../../services/quiz/verifyQuizService";

const initialState = {
  data: {},
  score: {},
  status: "idle",
};

export const getQuizById = createAsyncThunk(
  "quiz/id",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getQuizzesService(id);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyQuiz = createAsyncThunk(
  "quiz/verify",
  async (id, payload, { rejectWithValue }) => {
    try {
      const { data } = await verifyQuizService(id, payload);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuizById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getQuizById.rejected, (state, action) => {
        state.status = "failed";
      })

      .addCase(verifyQuiz.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyQuiz.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.score = action.payload;
      })
      .addCase(verifyQuiz.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default quizSlice.reducer;
