import Localize from '@/langs';
import data from '../data/charts.json';
import ChartItem from '@/components/ui/item/charts';
import { useRedirect } from '@/hooks/useRedirect';
import { PATH } from '@/routes/config';

interface IChartsProps {}

function Charts(props: IChartsProps) {
	console.log('Charts', props);
	const { redirectPage } = useRedirect();
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>{Localize('CHARTS')}</h4>
			<div className='flex flex-nowrap overflow-x-auto gap-4 scrollHiddenX snap-mandatory snap-x'>
				{data.map((i) => {
					return (
						<ChartItem
							onClick={() => {
								redirectPage(`${PATH.CHART._}/${i.id}`);
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
