import HomeMobile from '@/layout/mobile/home';

interface IViewProps {
	onRedirectAlbum: (dataItem: unknown) => void;
}

function View(props: IViewProps) {
	return <HomeMobile onClick={props.onRedirectAlbum} />;
}

export default View;
