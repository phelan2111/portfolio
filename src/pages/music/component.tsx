import { useNavigate } from 'react-router-dom';
import View from './view';
import { IChartItemProps } from '@/components/item/album/charts';
import { PATH_REDIRECT } from '@/utils/enums';

function Component() {
	const navigate = useNavigate();

	const handleRedirectChart = (dataItem: unknown) => {
		const chart = dataItem as IChartItemProps;
		navigate(`${PATH_REDIRECT.CHART._}/${chart.id}`);
	};

	return <View onRedirectChart={handleRedirectChart} />;
}

export default Component;
