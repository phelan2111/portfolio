import Localize from '@/langs';

export interface IChartItemProps {
	area: string;
	description: string;
	id: string;
	onClick: VoidFunction;
}

function ChartItem(props: IChartItemProps) {
	return (
		<div className='flex flex-col gap-2'>
			<div
				aria-hidden
				onClick={props.onClick}
				className={`w-40 h-40 flex flex-col items-center justify-center bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500`}>
				<p className='border-b w-fit text-2xl py-3 font-bold'>
					{Localize('TOP_50')}
				</p>
				<p className='py-3 text-[10px] uppercase font-bold'>
					{props.area}
				</p>
			</div>
			<p className='w-40 text-[10px] line-clamp-2'>{props.description}</p>
		</div>
	);
}

export default ChartItem;
