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
			<div className='flex text-xs gap-2 items-center'>
				<div>1:23</div>
				<div className='w-[400px] h-1 rounded-xl overflow-hidden bg-primary_dark-20'>
					<div className='w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1 rounded-xl' />
				</div>
				<div>3:39</div>
			</div>
		</div>
	);
}

export default View;
