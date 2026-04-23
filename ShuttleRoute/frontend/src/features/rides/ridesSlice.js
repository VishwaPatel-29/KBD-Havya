import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  currentRide: null,
  rideHistory: [],
  upcomingRides: [],
  nearbyPassengers: [],
  loading: false,
  error: null,
};

export const bookRide = createAsyncThunk('rides/book', async (rideData, { rejectWithValue }) => {
  try {
    const response = await api.post('/rides/book', rideData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to book ride');
  }
});

export const fetchMyRides = createAsyncThunk('rides/fetchMyRides', async (params = {}, { rejectWithValue }) => {
  try {
    const response = await api.get('/rides/my-rides', { params });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch rides');
  }
});

export const fetchActiveRide = createAsyncThunk('rides/fetchActiveRide', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/rides/active');
    return response.data.ride;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

export const cancelRide = createAsyncThunk('rides/cancelRide', async (rideId, { rejectWithValue }) => {
  try {
    const response = await api.patch(`/rides/${rideId}/cancel`);
    return response.data.ride;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to cancel ride');
  }
});

export const rateRide = createAsyncThunk('rides/rateRide', async ({ rideId, rating, feedback }, { rejectWithValue }) => {
  try {
    const response = await api.post(`/rides/${rideId}/rate`, { rating, feedback });
    return response.data.ride;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to rate ride');
  }
});

const ridesSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {
    setCurrentRide: (state, action) => {
      state.currentRide = action.payload;
    },
    updateETA: (state, action) => {
      if (state.currentRide && state.currentRide._id === action.payload.rideId) {
        state.currentRide.eta = action.payload.eta;
      }
    },
    clearRidesError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookRide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookRide.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRide = action.payload.ride;
        state.upcomingRides.unshift(action.payload.ride);
      })
      .addCase(bookRide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMyRides.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyRides.fulfilled, (state, action) => {
        state.loading = false;
        state.rideHistory = action.payload.rides;
      })
      .addCase(fetchMyRides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchActiveRide.fulfilled, (state, action) => {
        state.currentRide = action.payload;
      })
      .addCase(cancelRide.fulfilled, (state, action) => {
        if (state.currentRide?._id === action.payload._id) {
          state.currentRide = null;
        }
        state.upcomingRides = state.upcomingRides.filter(r => r._id !== action.payload._id);
      })
      .addCase(rateRide.fulfilled, (state, action) => {
        const index = state.rideHistory.findIndex(r => r._id === action.payload._id);
        if (index !== -1) {
          state.rideHistory[index] = action.payload;
        }
      });
  },
});

export const { setCurrentRide, updateETA, clearRidesError } = ridesSlice.actions;
export default ridesSlice.reducer;