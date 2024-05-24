import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./userSlice";


const appStore = configureStore({
    reducer:{
        user: useSlice
    }
});

export default appStore;