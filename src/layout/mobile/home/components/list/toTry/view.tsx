import ToTryCard from '@/components/card/toTry';
import Localize from '@/langs';
import data from '../../../data/totry.json';

function View() {
	return (
		<section className='flex flex-col gap-3'>
			<h4 className='text-xl font-bold'>{Localize('TO_TRY')}</h4>
			<div className='flex flex-col gap-4 overflow-x-auto scrollHiddenX'>
				{data.map((i) => (
					<ToTryCard {...i} key={i.id} />
				))}
			</div>
		</section>
	);
}

export default View;
