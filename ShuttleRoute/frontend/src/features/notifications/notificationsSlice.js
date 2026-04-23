import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  notifications: [],
  unreadCount: 0,
  fcmToken: null,
};

export const fetchNotifications = createAsyncThunk('notifications/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/notifications');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
      if (!action.payload.read) state.unreadCount++;
    },
    markAsRead: (state, action) => {
      const notification = state.notifications.find(n => n._id === action.payload);
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
    },
    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
    clearNotifications: (state) => {
      state.notifications = [];
      state.unreadCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.notifications || [];
      state.unreadCount = action.payload.unreadCount || 0;
    });
  },
});

export const { addNotification, markAsRead, setFcmToken, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;