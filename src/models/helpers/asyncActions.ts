/* eslint no-param-reassign: "error" */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* @typescript-eslint/no-inferrable-types */
import { AsyncThunk, SerializedError, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatusEnum } from '../../old/lib/types';

export const getAsyncActionsReducer = (
  asyncAction: AsyncThunk<any, void, Record<string, unknown>>,
  key = 'data',
) => ({
  [asyncAction.pending.type]: (state: any) => {
    state.loading = LoadingStatusEnum.pending;
  },
  [asyncAction.fulfilled.type]: (state: any, action: PayloadAction<number>) => {
    state.loading = LoadingStatusEnum.succeeded;
    state[key] = action.payload;
  },
  [asyncAction.rejected.type]: (
    state: any,
    error: PayloadAction<SerializedError>,
  ) => {
    state.loading = LoadingStatusEnum.failed;
    if (error.payload?.message) {
      state.error = error.payload.message;
    }
  },
});
