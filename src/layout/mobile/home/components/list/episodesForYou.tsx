import EpisodesForYouCard from '@/components/ui/card/episodesForYou';
import Localize from '@/langs';
import data from '../../data/episidesForyou.json';

function EpisodesForYou() {
	return (
		<section className='flex flex-col gap-3 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('EPISODES_FOR_YOU')}
			</h4>
			<div className='flex flex-nowrap gap-2 snap-x snap-mandatory overflow-x-auto scrollHiddenX'>
				{data.map((i) => (
					<EpisodesForYouCard key={i.imageEpisodes} {...i} />
				))}
			</div>
		</section>
	);
}

export default EpisodesForYou;
