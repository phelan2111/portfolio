import HoverCard from '@/components/root/animation/hoverCard';
import ItemRecentSearches from '@/components/ui/item/recentSearches';
import Localize from '@/langs';
import data from '@/pages/search/data/recentSearches.json';
import { handleStyleViewTool } from '..';

function RecentSearches() {
	return (
		<article className='flex flex-col gap-6'>
			<div className='flex justify-between items-end'>
				<p className='text-3xl font-bold'>
					{Localize('RECENT_SEARCHES')}
				</p>
				<p className='hover:underline cursor-pointer'>
					{Localize('CLEAR_RECENT_SEARCHES')}
				</p>
			</div>
			<div
				className={`px-4 grid gap-5 ${
					handleStyleViewTool().className
				}`}>
				{[...data]
					.slice(0, handleStyleViewTool().sliceData)
					.map((item) => {
						return (
							<HoverCard
								key={item.image}
								className='rounded-lg overflow-hidden cursor-pointer shadow-xl'>
								<ItemRecentSearches
									onDelete={() => {}}
									{...item}
								/>
							</HoverCard>
						);
					})}
			</div>
		</article>
	);
}

export default RecentSearches;
