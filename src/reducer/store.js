import { configureStore } from '@reduxjs/toolkit';
import listSlice from './listSlice';
import detailSlice from './detailSlice';

export default configureStore({
  reducer: {
    list: listSlice,
    detailList: detailSlice,
  },
});
