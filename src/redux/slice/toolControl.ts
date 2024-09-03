import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export enum EnumToolType {
	nowPlayingView = 0,
	queue,
	connectToADevice,
}
export type ToolControl = {
	open: boolean;
	typeTool: EnumToolType;
};
const initialState: ToolControl = {
	open: false,
	typeTool: EnumToolType.nowPlayingView,
};
export const toolControl = createSlice({
	name: 'toolSlice',
	initialState,
	reducers: {
		onSetState: (state, action: PayloadAction<ToolControl>) => {
			console.log('stateToolControl', state);
			return action.payload;
		},
	},
});

export const funcToolControl = toolControl.actions;
export const dataToolControl = (state: RootState) => state.toolSlice;
export default toolControl.reducer;
