import Localize from '@/langs';
import { IoCloseOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';

export interface IItemHorizontalSearchProps {
	image: string;
	name: string;
	singerName: string;
}
interface IHorizontalSearchItemProps {
	onDelete: VoidFunction;
	item: IItemHorizontalSearchProps;
}

function HorizontalSearchItem(props: IHorizontalSearchItemProps) {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center gap-4'>
				<img
					className='w-16 h-16 rounded-md'
					src={props.item.image}
					alt={props.item.image}
				/>
				<div className='flex flex-col gap-1'>
					<h6 className='text-base'>{props.item.name}</h6>
					<p className='flex items-center text-xs text-white/60'>
						{Localize('SONG')} <LuDot /> {props.item.singerName}
					</p>
				</div>
			</div>
			<div
				aria-hidden
				onClick={props.onDelete}
				className='w-8 h-8 flex items-center justify-center'>
				<IoCloseOutline className='text-xl' />
			</div>
		</div>
	);
}

export default HorizontalSearchItem;
