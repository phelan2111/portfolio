import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IFeedBackState {
	isOpen: boolean;
	data: unknown;
}

const initialState: IFeedBackState = {
	data: '',
	isOpen: false,
};

export const modalSlice = createSlice({
	name: 'modalSlice',
	initialState,
	reducers: {
		onClose: (state) => {
			state.isOpen = false;
		},
		onSetData: (state, action: PayloadAction<IFeedBackState>) => {
			state.isOpen = true;
			state.data = action.payload;
		},
	},
});

export const funcModal = modalSlice.actions;

export const dataModal = (state: RootState) => state.modal.data;

export default modalSlice.reducer;
