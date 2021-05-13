/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, LoadingStatusEnum } from '../../old/lib/types';
import { IExpertsState } from './types';
import { IMaterialsState } from '../materials/types';
import { fetchExperts } from './asyncActions';
import { getAsyncActionsReducer } from '../helpers/asyncActions';

const initialMaterialsState: IMaterialsState = {
  data: {
    postIds: [],
    posts: {},
    meta: {
      isLastPage: false,
      loading: LoadingStatusEnum.idle, // will be removed;
      error: null, // will be removed;
      pageNumber: 0,
      totalElements: 0,
      totalPages: 0,
    },
  },
  loading: LoadingStatusEnum.idle,
  error: null,
  filters: {},
};

const initialState: IExpertsState = {
  data: {
    expertIds: [],
    experts: {},
    meta: {
      totalPages: 0,
      pageNumber: 0,
      loading: LoadingStatusEnum.idle, // will be removed;
      error: null, // will be removed;
      isLastPage: false,
      totalElements: 0,
    },
  },
  loading: LoadingStatusEnum.idle,
  error: null,
  posts: initialMaterialsState,
};

export const expertsSlice = createSlice({
  name: 'experts',
  initialState,
  reducers: {
    resetMaterials: (state) => {
      state.posts = initialMaterialsState;
    },
    loadPosts: (state, action: PayloadAction<IPost[]>) => {
      action.payload.forEach((post) => {
        if (state.posts.data.posts && post.id) {
          state.posts.data.posts[post.id] = post;
        }
      });
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchExperts as any),
  },
});

export const { resetMaterials, loadPosts } = expertsSlice.actions;

export const expertsReducer = expertsSlice.reducer;
