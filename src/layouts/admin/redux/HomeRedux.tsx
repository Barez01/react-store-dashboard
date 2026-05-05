import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

/* ================= TYPES ================= */

interface MonthlyProfit {
  month: string;
  profit: number;
}

interface DailyProfit {
  date: string;
  total: number;
}

interface TopCategories {
  category: string;
  total: number;
}

export interface LowStockProducts {
  id: number;
  name: string;
  price: string;
  cost_price: string;
  stock: string;
  unit_type: string;
  min_stock_alert: string;
  category_id: string;
}

interface Overview {
  totalSales: number;
  totalProducts: number;
  totalCategories: number;
  todaySales: number;
  monthlyProfit: MonthlyProfit[];
  dailyProfit: DailyProfit[];
  topCategories: TopCategories[];
  lowStockProducts: LowStockProducts[];
}

interface HomeState {
  overview: Overview | null;
  loading: boolean;
  error: string | null;
}

/* ================= INITIAL STATE ================= */

const initialState: HomeState = {
  overview: null,
  loading: false,
  error: null,
};

/* ================= ASYNC ACTION ================= */

export const getOverview = createAsyncThunk<
  Overview,
  void,
  { rejectValue: string }
>("home/getOverview", async (_, thunkAPI) => {
  try {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmMTdmOGU0LTM5NDAtNGE5OS05N2RhLTgxNTNjNzAwNmMwOCIsImlhdCI6MTc3NzkzNTE5MCwiZXhwIjoxNzc4NTM5OTkwfQ.zzsWi1TdjNDH_erETYMypssfGo_OBm0jDcKmGyiSNsI";//Cookies.get("access_token");

    const response = await axios.get("http://localhost:4000/overview", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Overview could not be returned",
    );
  }
});

/* ================= SLICE ================= */

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOverview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload;
      })
      .addCase(getOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export const { setError, clearError } = homeSlice.actions;
export default homeSlice.reducer;
