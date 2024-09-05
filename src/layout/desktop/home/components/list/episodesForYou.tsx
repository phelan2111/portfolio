import HoverCard from '@/components/root/animation/hoverCard';
import EpisodesForYouCard from '@/components/ui/card/episodesForYou';
import Localize from '@/langs';
import data from '@/pages/home/data/episidesForyou.json';
import { handleStyleViewTool } from '../..';

function EpisodesForYou() {
	return (
		<section className='flex flex-col gap-4 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('EPISODES_FOR_YOU')}
			</h4>
			<div
				className={`grid gap-6 px-4 ${
					handleStyleViewTool().className
				}`}>
				{[...data]
					.slice(0, handleStyleViewTool().sliceData)
					.map((i) => (
						<HoverCard
							className='rounded-lg p-2 overflow-hidden cursor-pointer shadow-xl'
							key={i.imageEpisodes}>
							<EpisodesForYouCard key={i.imageEpisodes} {...i} />
						</HoverCard>
					))}
			</div>
		</section>
	);
}

export default EpisodesForYou;
