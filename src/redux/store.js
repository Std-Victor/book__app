import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import bookReducer from "./book.slice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
