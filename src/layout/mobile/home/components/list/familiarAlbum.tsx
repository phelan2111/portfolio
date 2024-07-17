import HorizontalAlbumItem from '@/components/ui/item/album/horizontal';
import data from '../../data/familiarAlbum.json';

interface IFamiliarAlbumProps {
	onClick: (dataItem: unknown) => void;
}

function FamiliarAlbum(props: IFamiliarAlbumProps) {
	return (
		<section className='grid grid-cols-2 gap-3 snap-start'>
			{data.map((album) => {
				return (
					<HorizontalAlbumItem
						onClick={() => {
							props.onClick(album);
						}}
						key={album.cover}
						{...album}
					/>
				);
			})}
		</section>
	);
}

export default FamiliarAlbum;
