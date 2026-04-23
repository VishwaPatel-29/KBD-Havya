import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  vehicles: [],
  activeVehicles: [],
  assignedRoute: null,
  loading: false,
  error: null,
};

export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async (params = {}, { rejectWithValue }) => {
  try {
    const response = await api.get('/vehicles', { params });
    return response.data.vehicles;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch vehicles');
  }
});

export const fetchVehicleLocation = createAsyncThunk('vehicles/fetchLocation', async (vehicleId, { rejectWithValue }) => {
  try {
    const response = await api.get(`/vehicles/${vehicleId}`);
    return response.data.vehicle;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    updateVehicleLocation: (state, action) => {
      const { vehicleId, lat, lng, heading } = action.payload;
      const vehicle = state.vehicles.find(v => v._id === vehicleId);
      if (vehicle) {
        vehicle.currentLocation = { lat, lng, heading, lastUpdated: new Date() };
      }
    },
    setAssignedRoute: (state, action) => {
      state.assignedRoute = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
        state.activeVehicles = action.payload.filter(v => v.status === 'in_transit' || v.status === 'assigned');
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateVehicleLocation, setAssignedRoute } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;