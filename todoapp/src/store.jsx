import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

const appStore = configureStore({
    reducer : {
        todoInfo : todoReducer
    }
});

export default appStore;