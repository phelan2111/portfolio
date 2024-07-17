import Localize from '@/langs';
import data from '../data/charts.json';
import ChartItem from '@/components/ui/item/album/charts';

interface IChartsProps {
	onClick: (dataItem: unknown) => void;
}

function Charts(props: IChartsProps) {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>{Localize('CHARTS')}</h4>
			<div className='flex flex-nowrap overflow-x-auto gap-4 scrollHiddenX snap-mandatory snap-x'>
				{data.map((i) => {
					return (
						<ChartItem
							onClick={() => {
								props.onClick(i);
							}}
							key={i.description}
							{...i}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Charts;
