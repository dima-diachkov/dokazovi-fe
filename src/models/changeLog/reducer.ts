import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from 'models/helpers/asyncActions';
import { GetChangesLogResponseType } from 'old/lib/utilities/API/types';
import { getChangeLog } from './asyncAction';

const initialState: GetChangesLogResponseType = {
  size: 0,
  content: [],
};

const changeLog = createSlice({
  name: 'changesLog',
  initialState,
  reducers: {
    setChangesSize: (state, action: PayloadAction<number>) => {
      const setChangeObj = state;
      setChangeObj.size = action.payload;
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(getChangeLog as any),
  },
});

const { setChangesSize } = changeLog.actions;

const changeLogReducer = changeLog.reducer;
export { setChangesSize, changeLogReducer };
