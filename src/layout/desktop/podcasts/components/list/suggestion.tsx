import PodcastsSuggestionCard from '@/components/ui/card/podcastsSuggestion';
import data from '@/pages/podcasts/data/suggestion.json';
import { handleStyleViewTool } from '../../list';
import HoverCard from '@/components/root/animation/hoverCard';
import Localize from '@/langs';
import { useRedirect } from '@/hooks/useRedirect';
import { PATH } from '@/routes/config';

function Suggestion() {
	const { redirectPage } = useRedirect();
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
							onClick={() => {
								redirectPage(
									`${PATH.PODCASTS._}/8099c7ec-903e-4a5e-8fab-cde250e30400`,
								);
							}}
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
