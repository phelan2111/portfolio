import { useNavigate } from 'react-router-dom';
import View from './view';
import { IChartItemProps } from '@/components/item/album/charts';
import { PATH_REDIRECT } from '@/utils/enums';
import { IHorizontalAlbumItemProps } from '@/components/item/album/horizontal';

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
