import IItemBrowse from '@/components/ui/item/browse';
import Localize from '@/langs';
import { handleStyleViewTool } from '..';
import HoverCard from '@/components/root/animation/hoverCard';
import data from '@/pages/search/data/browse.json';

function BrowseAll() {
	return (
		<article className='flex flex-col gap-6'>
			<div className='flex justify-between items-end'>
				<p className='text-3xl font-bold'>{Localize('BROWSE_ALL')}</p>
			</div>
			<div
				className={`px-4 grid gap-5 ${
					handleStyleViewTool().className
				}`}>
				{[...data].map((item) => {
					return (
						<HoverCard
							key={item.title}
							className='rounded-lg overflow-hidden cursor-pointer shadow-xl'>
							<IItemBrowse {...item} />
						</HoverCard>
					);
				})}
			</div>
		</article>
	);
}

export default BrowseAll;
