import ChartMobile from '@/layout/mobile/chart';

interface IViewProps {
	onRedirectMusic: VoidFunction;
}

function View(props: IViewProps) {
	return <ChartMobile {...props} />;
}

export default View;
