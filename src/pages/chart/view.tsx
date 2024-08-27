import ScreenResponsive from '@/components/ui/responsive/screen';
import ChartMobile from '@/layout/mobile/chart';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('props', props);
	return (
		<ScreenResponsive
			mobile={() => <ChartMobile />}
			desktop={() => <div>Chart Desktop</div>}
		/>
	);
}

export default View;
