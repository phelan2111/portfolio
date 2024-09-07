import Video from '@/components/root/video/video';
import Localize from '@/langs';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';
import FollowButton from '../../button/follow';

interface IViewProps {
	onClose: VoidFunction;
}
function View(props: IViewProps) {
	return (
		<div className='min-w-[348px] flex flex-col gap-6 h-tool overflow-y-auto scrollHiddenY pr-2'>
			<div className='flex flex-col'>
				<div className='flex sticky pb-3 pt-1 bg-primary_dark-10 top-0 items-center justify-between animate-translateBottom_duration_0dot8 z-10'>
					<h5 className='font-bold'>Lil Nas X</h5>
					<div className='flex items-center gap-2'>
						<div className='min-w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<BsThreeDots />
						</div>
						<div
							aria-hidden
							onClick={props.onClose}
							className='min-w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<IoMdClose />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='h-[348px] rounded-xl overflow-auto'>
						<Video
							autoPlay
							mute={true}
							src={
								'https://res.cloudinary.com/dkvhfe4uu/video/upload/v1718469572/youveGotMaBack_wtpuqt.mp4'
							}
							track={
								'https://res.cloudinary.com/dkvhfe4uu/video/upload/v1718469572/youveGotMaBack_wtpuqt.mp4'
							}
						/>
					</div>
					<div className='flex justify-between items-center group'>
						<div className='w-72 overflow-hidden'>
							<h2 className='font-bold text-4xl whitespace-nowrap translate-x-0 group-hover:-translate-x-[105%] transition-transform duration-[8s] cursor-pointer'>
								MONTERO (Call My By Your Name)
							</h2>
							<h4 className='font-bold whitespace-nowrap translate-x-0'>
								Lil Nas X
							</h4>
						</div>
						<div className='min-w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<IoAddCircleOutline />
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gradient-to-b from-primary_dark rounded-t-xl h-full'>
				<div className='relative rounded-t-xl overflow-hidden w-full h-64 group cursor-pointer'>
					<img
						className='w-full h-64 object-cover bg-center group-hover:scale-110 transition-transform duration-700'
						src='https://i.pinimg.com/564x/2e/5b/ab/2e5bab97cfcdbf42d55d86d806fc7a2e.jpg'
						alt='https://i.pinimg.com/564x/2e/5b/ab/2e5bab97cfcdbf42d55d86d806fc7a2e.jpg'
					/>
					<div className='absolute top-0 left-0 text-xl w-full h-full bg-gradient-to-b from-primary_dark-20/80 p-4'>
						{Localize('ABOUT_THE_ARTIST')}
					</div>
				</div>
				<div className='p-4 w-full'>
					<h4 className='font-bold whitespace-nowrap translate-x-0'>
						Lil Nas X
					</h4>
					<div className='flex justify-between items-center'>
						<p>24,102,124 {Localize('MONTHLY_LISTENER')}</p>
						<FollowButton />
					</div>
				</div>
				<div className='px-4 pb-4'>
					<p className='line-clamp-3'>
						Lil Nas X is an award-winning rapper, singer, songwriter
						from Atlanta, Georgia. Dubbed “an internationally
						recognized phenomenon” by Billboard, he rose to fame in
						2019 when he released “Old Town Road” and simultaneously
						upended the music industry – shattering genre norms,
						disrupting the charts and going viral worldwide. The
						song’s remix with Billy Ray Cyrus became the longest
						running #1 single in Billboard Hot 100 history after 19
						weeks atop the chart. The 14x Platinum hit is the most
						certified song in RIAA history and is recognized with
						numerous awards including two Grammys. After releasing
						his eclectic EP 7 in June 2019, which features the 6x
						Platinum “Panini” and 2x Platinum “Rodeo,” Lil Nas X
						returned in November 2020 with his Platinum single
						“HOLIDAY”, and followed with the culture-shifting hit
						“MONTERO (Call Me Be Your Name)” in March 2021. The
						queer anthem provoked much needed dialogue around the
						globe, debuted at #1 on the Billboard Hot 100, and
						remained atop of the Spotify Global chart for over a
						month straight. He delivered sensational performances of
						the song on the season finale of Saturday Night Live and
						at the 2021 BET Awards, propelling the song to #1 on the
						Top 40 and Rhythm Airplay charts. Already named a
						fashion icon for all his incredible eye-catching looks,
						the multifaceted artist and internet king is preparing
						to release the best album of all time later this year.
						Montero will also include recent songs “SUN GOES DOWN”
						and “INDUSTRY BABY.”
					</p>
				</div>
			</div>
			<div className='bg-gradient-to-b from-primary_dark rounded-b-xl h-full rounded-xl'>
				<div className='p-4'>
					<div className='flex items-center justify-between font-bold'>
						<p>{Localize('NEXT_IN_QUEUE')}</p>
						<p className='cursor-pointer hover:underline'>
							{Localize('OPEN_QUEUE')}
						</p>
					</div>
					<div className='flex gap-4 snap-start pt-4'>
						<img
							className='min-w-14 max-w-14 h-14 object-cover rounded-xl'
							src={
								'https://i.pinimg.com/564x/93/79/19/937919211a8cec9a0811f78636693535.jpg'
							}
							alt={
								'https://i.pinimg.com/564x/93/79/19/937919211a8cec9a0811f78636693535.jpg'
							}
						/>
						<div className='flex items-center justify-between w-full'>
							<div>
								<h6 className='text-xl truncate w-40 font-bold'>
									INDUSTRY BABY (Feat.Jack Harlow)
								</h6>
								<p className='truncate w-44 text-gray-400 font-bold'>
									Lil Nas X, Jack Harlow
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default View;
