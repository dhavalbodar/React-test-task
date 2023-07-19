import { createSlice } from "@reduxjs/toolkit";

export const headAndTailSlice = createSlice({
  name: "headAndTail",
  initialState: {
    flipsList: [],
  },
  reducers: {
    updateFlipsList: (state, action) => {
      return {
        ...state,
        flipsList: [...state.flipsList, action.payload],
      };
    },
    resetFlipsList: (state) => {
      return {
        ...state,
        flipsList: [],
      };
    },
  },
});

export const { updateFlipsList, resetFlipsList } = headAndTailSlice.actions;
export const flipsData = (state) => state.flipsList;
export default headAndTailSlice.reducer;
