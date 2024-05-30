import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
    reducer:{
        user: useSlice,
        movies: moviesReducer
    }
});

export default appStore;