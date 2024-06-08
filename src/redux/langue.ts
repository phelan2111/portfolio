import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Langue } from '@/utils/enums';

export interface ModalState {
	data: Langue;
}

const initialState: ModalState = {
	data: Langue.english,
};

export const langueSlice = createSlice({
	name: 'langue',
	initialState,
	reducers: {
		onChangeLangue: (state, action: PayloadAction<ModalState>) => {
			state.data = action.payload.data;
		},
	},
});

export const { onChangeLangue } = langueSlice.actions;

export const dataLangue = (state: RootState) => state.langue.data;

export default langueSlice.reducer;
