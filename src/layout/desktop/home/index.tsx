import AppBarTop from '@/components/ui/appbar/top';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';

function HomeDesktop() {
	return (
		<section className='py-6 px-4 w-full animate-translateBottom_duration_1dot2'>
			<div className='bg-primary_dark-10 w-full py-6 px-4 rounded-3xl flex flex-col gap-4'>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<div className='w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<FaAngleLeft />
						</div>
						<div className='w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center transition-transform hover:scale-110 items-center cursor-pointer opacity-50'>
							<FaAngleRight />
						</div>
					</div>
					<div className='flex gap-2'>
						<div className='w-10 h-10 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<IoNotificationsOutline className='text-lg' />
						</div>
						<div className='p-2 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<img
								className='w-6 h-6 rounded-full'
								src='https://i.pinimg.com/736x/42/d1/6f/42d16fffa8c6c6124a7bd66ddc818c39.jpg'
								alt='https://i.pinimg.com/736x/42/d1/6f/42d16fffa8c6c6124a7bd66ddc818c39.jpg'
							/>
						</div>
					</div>
				</div>
				<AppBarTop />
			</div>
		</section>
	);
}

export default HomeDesktop;
