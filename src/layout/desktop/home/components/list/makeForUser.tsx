import HoverCard from '@/components/root/animation/hoverCard';
import AlbumCard from '@/components/ui/card/album';
import Localize from '@/langs';
import data from '@/pages/home/data/yourTopMixes.json';
import { handleStyleViewTool } from '../..';

function MakeForUser() {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex justify-between w-full items-center'>
				<h4 className='text-xl font-bold'>
					{Localize('MADE_FOR')} Chaos
				</h4>
				<div className='text-sm cursor-pointer hover:underline'>
					{Localize('SHOW_ALL')}
				</div>
			</div>
			<div
				className={`grid grid-cols-3 gap-4 px-4 ${
					handleStyleViewTool().className
				}`}>
				{[...data]
					.slice(0, handleStyleViewTool().sliceData)
					.map((album) => (
						<HoverCard
							className='rounded-lg overflow-hidden cursor-pointer shadow-xl'
							key={
								album.albumName +
								album.albumImage +
								MakeForUser.name
							}>
							<AlbumCard {...album} />
						</HoverCard>
					))}
			</div>
		</section>
	);
}

export default MakeForUser;
