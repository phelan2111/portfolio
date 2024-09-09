import { sliceToolControl } from '@/redux/slice';
import View from './view';
import { EnumToolType } from '@/redux/slice/toolControl';
import { useAppDispatch } from '@/hooks/redux';

function Model() {
	const dispatch = useAppDispatch();

	const handleClose = () => {
		dispatch(
			sliceToolControl.func.onSetState({
				open: false,
				typeTool: EnumToolType.nowPlayingView,
			}),
		);
	};
	return <View onClose={handleClose} />;
}

export default Model;
