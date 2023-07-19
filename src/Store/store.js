import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore, persistReducer } from "redux-persist";
import signupReducer from "../Store/Slices/signupSlice";
import loginReducer from "../Store/Slices/loginSlice";
import headAndTailReducer from "../Store/Slices/headAndTailSlice";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  headAndTail: headAndTailReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["signup", "login", "headAndTail"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  devTools: true,
});

export let persistor = persistStore(store);
setupListeners(store.dispatch);

export default store;
