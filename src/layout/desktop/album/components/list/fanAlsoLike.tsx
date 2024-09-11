import data from '@/pages/home/data/yourFavoriteArtist.json';
import VerticalSingerItem from '@/components/ui/item/vertical';
import { handleStyleViewTool } from '../..';

function FanAlsoLike() {
	return (
		<div
			className={`grid xl:grid-cols-3 lg:grid-cols-3 gap-4 px-4 ${
				handleStyleViewTool().className
			}`}>
			{data.slice(0, handleStyleViewTool().sliceData).map((i) => (
				<VerticalSingerItem key={i.avatarSinger} {...i} />
			))}
		</div>
	);
}

export default FanAlsoLike;
