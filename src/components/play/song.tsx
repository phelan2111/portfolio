import { FaPlay } from 'react-icons/fa';
import { GoPlusCircle } from 'react-icons/go';

function PlaySong() {
	return (
		<article className='fixed bottom-[75px] w-full z-30 right-0 bg-primary_dark-10 rounded-t-2xl'>
			<div className='px-4 py-2 flex justify-between items-center'>
				<div className='flex gap-2'>
					<img
						className='w-12 h-12 object-cover rounded-sm'
						src='https://i.pinimg.com/736x/e8/79/8d/e8798d217ab8817d1e89d42ba8accfaf.jpg'
						alt='https://i.pinimg.com/736x/e8/79/8d/e8798d217ab8817d1e89d42ba8accfaf.jpg'
					/>
					<div>
						<h6>RISE</h6>
						<p className='text-xs'>League of Legends</p>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<GoPlusCircle className='text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer' />
					<FaPlay className='text-xl hover:scale-110 transition-transform duration-300 cursor-pointer' />
				</div>
			</div>
		</article>
	);
}

export default PlaySong;
