import data from '@/pages/home/data/familiarAlbum.json';
import { useRedirect } from '@/hooks/useRedirect';
import HorizontalItem from '@/components/ui/item/horizontal';
import { PATH } from '@/routes/config';
import Localize from '@/langs';

interface IFamiliarAlbumProps {}

function FamiliarAlbum(props: IFamiliarAlbumProps) {
	console.log('FamiliarAlbum', props);
	const { redirectPage } = useRedirect();
	return (
		<section className='flex flex-col gap-6 animate-translateBottom_duration_0dot8'>
			<h4 className='text-xl font-bold'>{Localize('RECENT_ALBUMS')}</h4>
			<div className='grid xl:grid-cols-4 lg:grid-cols-2 gap-3 snap-start'>
				{data.map((album) => {
					return (
						<HorizontalItem
							className='bg-white/10 hover:opacity-80 transition-all duration-300 shadow-materialDesign rounded-md overflow-hidden cursor-pointer relative'
							onClick={() => {
								redirectPage(`${PATH.ALBUM._}/${album.id}`);
							}}
							render={() => (
								<p className='text-xs font-bold'>
									{album.nameAlbum}
								</p>
							)}
							image={{
								className: 'size-14',
								fieldImage: 'cover',
							}}
							key={album.cover}
							item={album}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default FamiliarAlbum;
