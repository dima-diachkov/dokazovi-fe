/* eslint no-param-reassign: "error" */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AsyncThunk, SerializedError, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatusEnum } from '../../lib/types';

export const getAsyncActionsReducer = (
  asyncAction: AsyncThunk<any, void, Record<string, unknown>>,
) => ({
  [asyncAction.pending.type]: (state: any) => {
    state.loading = LoadingStatusEnum.pending;
  },
  [asyncAction.fulfilled.type]: (state: any, action: PayloadAction<number>) => {
    state.loading = LoadingStatusEnum.succeeded;
    state.data = action.payload;
  },
  [asyncAction.rejected.type]: (state: any, error: SerializedError) => {
    state.loading = LoadingStatusEnum.failed;
    if (error.message) {
      state.error = error.message;
    }
  },
});
