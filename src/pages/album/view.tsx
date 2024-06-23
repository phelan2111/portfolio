import AlbumMobile from '@/layout/mobile/album';

interface IViewProps {
	onRedirectHome: VoidFunction;
}

function View(props: IViewProps) {
	return <AlbumMobile {...props} />;
}

export default View;
