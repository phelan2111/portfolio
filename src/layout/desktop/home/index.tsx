import ResponsiveDesktop from '@/components/ui/responsive/desktop';
import FamiliarAlbum from './components/list/familiarAlbum';
import MakeForUser from './components/list/makeForUser';
import YourFavoriteArtists from './components/list/yourFavoriteArtists';
import YourTopMixes from './components/list/yourTopMixes';

function HomeDesktop() {
	return (
		<ResponsiveDesktop>
			<section className='w-full animate-translateBottom_duration_0dot8 flex flex-col gap-8'>
				<FamiliarAlbum />
				<MakeForUser />
				<YourTopMixes />
				<YourFavoriteArtists />
			</section>
		</ResponsiveDesktop>
	);
}

export default HomeDesktop;
