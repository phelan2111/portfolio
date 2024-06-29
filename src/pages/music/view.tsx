import MusicMobile from '@/layout/mobile/music';

interface IViewProps {
	onRedirectChart: (dataItem: unknown) => void;
	onRedirectAlbum: (dataItem: unknown) => void;
}

function View(props: IViewProps) {
	return (
		<MusicMobile
			onGetInformationAlbum={props.onRedirectAlbum}
			onGetInformationChart={props.onRedirectChart}
		/>
	);
}

export default View;
