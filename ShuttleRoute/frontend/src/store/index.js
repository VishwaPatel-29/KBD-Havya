import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ridesReducer from '../features/rides/ridesSlice';
import vehiclesReducer from '../features/vehicles/vehiclesSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';
import uiReducer from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rides: ridesReducer,
    vehicles: vehiclesReducer,
    notifications: notificationsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/setUser'],
      },
    }),
});

export default store;