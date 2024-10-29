import { configureStore } from '@reduxjs/toolkit';
import reducer from './redditSlice';

const store = configureStore({
  reducer: {
    reddit: reducer,
  },
});

export default store;