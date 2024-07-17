import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH_REDIRECT } from '@/utils/enums';
import { IChartItemProps } from '@/components/ui/item/album/charts';
import { IHorizontalAlbumItemProps } from '@/components/ui/item/album/horizontal';

function Component() {
	const navigate = useNavigate();

	const handleRedirectChart = (dataItem: unknown) => {
		const chart = dataItem as IChartItemProps;
		navigate(`${PATH_REDIRECT.CHART._}/${chart.id}`);
	};
	const handleRedirectAlbum = (dataItem: unknown) => {
		const album = dataItem as IHorizontalAlbumItemProps;
		navigate(`${PATH_REDIRECT.ALBUM}/${album.id}`);
	};

	return (
		<View
			onRedirectAlbum={handleRedirectAlbum}
			onRedirectChart={handleRedirectChart}
		/>
	);
}

export default Component;
