import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/bookSlice.js";

const appStore = configureStore({
    reducer: {
        books: booksReducer
    }
});

export default appStore;