import FamiliarAlbum from './components/list/familiarAlbum';
import MakeForUser from './components/list/makeForUser';
import YourTopMixes from './components/list/yourTopMixes';

function HomeDesktop() {
	return (
		<section className='w-full animate-translateBottom_duration_1dot2 flex flex-col gap-6'>
			<div className='bg-primary_dark-10 w-full py-6 px-4 rounded-3xl flex flex-col gap-8'>
				<FamiliarAlbum />
			</div>
			<div className='bg-primary_dark-10 w-full py-6 px-4 rounded-3xl flex flex-col gap-8'>
				<MakeForUser />
			</div>
			<div className='bg-primary_dark-10 w-full py-6 px-4 rounded-3xl flex flex-col gap-8'>
				<YourTopMixes />
			</div>
		</section>
	);
}

export default HomeDesktop;
