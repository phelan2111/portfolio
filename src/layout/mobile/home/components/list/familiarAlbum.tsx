import HorizontalAlbumItem from '@/components/item/album/horizontal';
import data from '../../data/familiarAlbum.json';
function FamiliarAlbum() {
	return (
		<section className='grid grid-cols-2 gap-3 snap-start'>
			{data.map((album) => {
				return <HorizontalAlbumItem key={album.cover} {...album} />;
			})}
		</section>
	);
}

export default FamiliarAlbum;
