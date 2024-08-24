import AlbumCard from '@/components/ui/card/album';
import Localize from '@/langs';
import data from '@/pages/home/data/yourTopMixes.json';

function MakeForUser() {
	return (
		<section className='flex flex-col gap-3'>
			<div className='flex justify-between w-full items-center'>
				<h4 className='text-xl font-bold'>
					{Localize('MADE_FOR')} Chaos
				</h4>
				<div className='text-sm cursor-pointer hover:underline'>
					{Localize('SHOW_ALL')}
				</div>
			</div>
			<div className='grid xl:grid-cols-6 2xl:grid-cols-7 lg:grid-cols-3 gap-4'>
				{data.slice(0, 7).map((album) => (
					<AlbumCard
						{...album}
						key={
							album.albumName +
							album.albumImage +
							MakeForUser.name
						}
					/>
				))}
			</div>
		</section>
	);
}

export default MakeForUser;
