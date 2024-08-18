import { useRedirect } from '@/hooks/useRedirect';
import Localize from '@/langs';
import { IoArrowBackSharp } from 'react-icons/io5';
import Playlist from './list/playlist';
import BottomNavigate, { links } from '@/components/root/navigate/bottom';
import PlaySong from '@/components/ui/play/song';
import {
	BsCloudDownloadFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
} from 'react-icons/bs';
import { IItemIcon } from '@/components/ui/menu/icon';

function ListeningHistoryMobile() {
	const { redirectPrev } = useRedirect();
	const itemsMenu: IItemIcon[] = [
		{
			icon: <BsFillPlusCircleFill />,
			text: 'ADD_TO_YOUR_LIBRARY',
			onClick: () => {},
		},
		{
			icon: <BsCloudDownloadFill />,
			text: 'DOWNLOAD',
			onClick: () => {},
		},
		{
			icon: <BsFillXOctagonFill />,
			text: 'NOT_INTERESTED',
			onClick: () => {},
		},
	];

	return (
		<main className='h-screen w-screen bg-primary_dark-20 text-white pb-40 lg:hidden block'>
			<header className='flex text-white relative w-full justify-center py-4 animate-translateBottom_duration_0dot8'>
				<h4 className='text-lg font-bold'>
					{Localize('RECENTLY_PLAYED')}
				</h4>
				<IoArrowBackSharp
					className='absolute left-4 top-5 text-xl'
					aria-hidden
					onClick={redirectPrev}
				/>
			</header>
			<section className='h-yourLibrary overflow-y-auto snap-mandatory snap-y animate-translateBottom_duration_0dot8'>
				<Playlist itemMenus={itemsMenu} />
			</section>
			<BottomNavigate defaultPath={links[0]} />
			<PlaySong />
		</main>
	);
}

export default ListeningHistoryMobile;
