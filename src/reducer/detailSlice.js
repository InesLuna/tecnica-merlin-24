import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'detailList',
  initialState: {
    detailIds: [],
    actualId: '',
    detailList: [],
    actualPodcast: null,
    actualEpisode: null,
    loading: false 
  },
  reducers: {
    detailAdd: (state, action) => {
      state.detailList.push(action.payload);
    },
    detailIdsAdd: (state, action) => {
      state.detailIds.push(action.payload);
    },
    detailSetActualId: (state, action) => {
      state.actualId = action.payload;
    },
    detailSetactualPodcast: (state, action) => {
      state.actualPodcast = action.payload;
    },
    detailSetActualEpisode: (state, action) => {
      state.actualEpisode = action.payload;
    },
    loadingSet: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { detailAdd, detailIdsAdd, detailSetActualId, detailSetactualPodcast, detailSetActualEpisode, loadingSet } = detailSlice.actions;

export default detailSlice.reducer;