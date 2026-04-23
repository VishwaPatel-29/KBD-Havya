import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'dark';
  }
  return 'dark';
};

const initialState = {
  theme: getInitialTheme(),
  sidebarOpen: false,
  globalLoader: false,
  toastQueue: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
      if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      if (action.payload === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setGlobalLoader: (state, action) => {
      state.globalLoader = action.payload;
    },
    addToast: (state, action) => {
      state.toastQueue.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeToast: (state, action) => {
      state.toastQueue = state.toastQueue.filter(t => t.id !== action.payload);
    },
    clearToastQueue: (state) => {
      state.toastQueue = [];
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  toggleSidebar,
  setSidebarOpen,
  setGlobalLoader,
  addToast,
  removeToast,
  clearToastQueue,
} = uiSlice.actions;

export default uiSlice.reducer;