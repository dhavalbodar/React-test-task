import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    userData: [
      {
        id: 1,
        userName: "test",
        email: "test@gmail.com",
        password: "test@123",
      },
    ],
  },
  reducers: {
    createUser: (state, action) => {
      let newUserData = {
        id: state.userData.length + 1,
        ...action.payload,
      };
      return { ...state, userData: [...state.userData, newUserData] };
    },
  },
});

export const { createUser } = signupSlice.actions;
export default signupSlice.reducer;
