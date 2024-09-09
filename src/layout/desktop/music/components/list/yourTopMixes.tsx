import HoverCard from '@/components/root/animation/hoverCard';
import AlbumCard from '@/components/ui/card/album';
import Localize from '@/langs';
import data from '@/pages/home/data/yourTopMixes.json';
import { handleStyleViewTool } from '../..';

function YourTopMixes() {
	return (
		<section className='flex flex-col gap-4 snap-start'>
			<div className='flex justify-between w-full items-center'>
				<h4 className='text-xl font-bold'>
					{Localize('YOUR_TOP_MIX')}
				</h4>
				<div className='text-sm cursor-pointer hover:underline'>
					{Localize('SHOW_ALL')}
				</div>
			</div>
			<div
				className={`grid xl:grid-cols-3 lg:grid-cols-3 gap-6 px-4 ${
					handleStyleViewTool().className
				}`}>
				{data.slice(0, handleStyleViewTool().sliceData).map((album) => (
					<HoverCard
						className='rounded-lg overflow-hidden cursor-pointer shadow-xl'
						key={
							album.albumName +
							album.albumImage +
							YourTopMixes.name
						}>
						<AlbumCard {...album} />
					</HoverCard>
				))}
			</div>
		</section>
	);
}

export default YourTopMixes;
