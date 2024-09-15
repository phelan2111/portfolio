import ProcessPlaySong from '@/components/root/process/playSong';
import { IoIosPlay, IoMdRepeat } from 'react-icons/io';
import { IoShuffle } from 'react-icons/io5';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

function View() {
	return (
		<div className='flex flex-col gap-1 justify-center items-center'>
			<div className='text-2xl flex gap-4 items-center'>
				<IoShuffle className='transition-transform hover:scale-110 cursor-pointer duration-500' />
				<MdSkipPrevious className='transition-transform hover:scale-110 cursor-pointer duration-500' />
				<div className='min-w-10 h-10 bg-primary_dark-20 rounded-full flex justify-center duration-500 items-center transition-transform hover:scale-110 cursor-pointer'>
					<IoIosPlay />
				</div>
				<MdSkipNext className='transition-transform hover:scale-110 cursor-pointer duration-500' />
				<IoMdRepeat className='transition-transform hover:scale-110 cursor-pointer duration-500' />
			</div>
			<ProcessPlaySong />
		</div>
	);
}

export default View;
