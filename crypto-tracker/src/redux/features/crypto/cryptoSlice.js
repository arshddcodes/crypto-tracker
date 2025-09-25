import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrypt = createAsyncThunk("crcpt/fetchcrypto/", async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    }
  );
  return res.data;
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    coin: [],
    status: "idle",
    error: null,
  },

  reducers: {
    clearCrypto: (state) => {
      (state.coin = []), (state.status = "idle");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypt.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCrypt.fulfilled, (state, action) => {
        state.status = "success";
        state.coin = action.payload;
      })
      .addCase(fetchCrypt.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
