import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginUser: undefined,
  },
  reducers: {
    updateLoginUser: (state, action) => {
      return {
        ...state,
        loginUser: { ...action.payload },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        loginUser: undefined,
      };
    },
  },
});

export const { updateLoginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
