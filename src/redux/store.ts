import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './feedback';
import langueReducer from './langue';
import songReducer from './song';

export const store = configureStore({
	reducer: {
		feedback: modalReducer,
		langue: langueReducer,
		song: songReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
