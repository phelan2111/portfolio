import FamiliarAlbum from './components/list/familiarAlbum';
import MakeForUser from './components/list/makeForUser';
import YourFavoriteArtists from './components/list/yourFavoriteArtists';
import YourTopMixes from './components/list/yourTopMixes';

function HomeDesktop() {
	return (
		<section className='w-full animate-translateBottom_duration_1dot2 flex flex-col gap-6'>
			<div className='bg-gradient-to-b from-primary_dark-10 w-full py-6 px-4 rounded-3xl flex flex-col gap-8'>
				<FamiliarAlbum />
				<MakeForUser />
				<YourTopMixes />
				<YourFavoriteArtists />
			</div>
		</section>
	);
}

export default HomeDesktop;
