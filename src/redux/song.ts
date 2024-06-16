import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ISongState {
	name: string;
	isPlay: boolean;
}

const initialState: ISongState = {
	name: '',
	isPlay: false,
};

export const songSlice = createSlice({
	name: 'song',
	initialState,
	reducers: {
		onPlay: (state) => {
			state.isPlay = true;
		},
		onPause: (state) => {
			state.isPlay = false;
		},
		onSetData: (state, action: PayloadAction<ISongState>) => {
			state.name = action.payload.name;
		},
	},
});

export const { onPlay, onSetData } = songSlice.actions;

export const dataModal = (state: RootState) => state.song;

export default songSlice.reducer;
