import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dateReducer from '../features/dateSlice';

export default configureStore({
  reducer: {
    date: dateReducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: false,
    })
  }
});
