import MusicMobile from '@/layout/mobile/music';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('View', props);
	return <MusicMobile />;
}

export default View;
