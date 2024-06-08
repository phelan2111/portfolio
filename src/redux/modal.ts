import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ModalState {
	isOpen: boolean;
	data: unknown;
}

const initialState: ModalState = {
	data: '',
	isOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		onClose: (state) => {
			state.isOpen = false;
		},
		onSetData: (state, action: PayloadAction<ModalState>) => {
			state.isOpen = true;
			state.data = action.payload;
		},
	},
});

export const { onClose, onSetData } = modalSlice.actions;

export const dataModal = (state: RootState) => state.modal.data;

export default modalSlice.reducer;
