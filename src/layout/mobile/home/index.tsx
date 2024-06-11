import AppBar from './components/appBar';
import NewReleaseCard from './components/card/newRelease';
import FamiliarAlbum from './components/list/familiarAlbum';
import YourTopMixes from './components/list/yourTopMixes';

function HomeMobile() {
	return (
		<main className='px-2 py-4 flex flex-col gap-6 pb-[75px]'>
			<AppBar />
			<FamiliarAlbum />
			<NewReleaseCard />
			<YourTopMixes />
		</main>
	);
}

export default HomeMobile;
