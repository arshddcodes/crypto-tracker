import { configureStore } from "@reduxjs/toolkit";

import cryptoReducer from "./features/crypto/cryptoSlice";
import favouriteReducer from "./features/crypto/favourite/favouriteSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    favourite: favouriteReducer,
  },
});
