import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modal';
import langueReducer from './slice/langue';
import songReducer from './slice/song';
import toolControl from './slice/toolControl';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		langue: langueReducer,
		song: songReducer,
		toolSlice: toolControl,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
