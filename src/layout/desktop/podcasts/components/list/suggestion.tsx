import PodcastsSuggestionCard from '@/components/ui/card/podcastsSuggestion';
import data from '@/pages/podcasts/data/suggestion.json';
import { handleStyleViewTool } from '../..';
import HoverCard from '@/components/root/animation/hoverCard';
import Localize from '@/langs';

function Suggestion() {
	return (
		<section className='flex flex-col gap-4 snap-start'>
			<h4 className='text-xl font-bold'>
				{Localize('EPISODES_FOR_YOU')}
			</h4>
			<div
				className={`grid gap-6 px-4 ${
					handleStyleViewTool().classNamePodcast
				}`}>
				{data.map((i) => {
					return (
						<HoverCard
							className='rounded-lg overflow-hidden cursor-pointer shadow-xl'
							key={i.image}>
							<PodcastsSuggestionCard item={i} key={i.image} />
						</HoverCard>
					);
				})}
			</div>
		</section>
	);
}

export default Suggestion;
