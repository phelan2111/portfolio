import MusicMobile from '@/layout/mobile/music';

interface IViewProps {
	onRedirectChart: (dataItem: unknown) => void;
}

function View(props: IViewProps) {
	return <MusicMobile onGetInformationChart={props.onRedirectChart} />;
}

export default View;
