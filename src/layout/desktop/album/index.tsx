import FollowButton from '@/components/ui/button/follow';
import ResponsiveDesktop from '@/components/ui/responsive/desktop';
import Localize from '@/langs';
import { BsThreeDots } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { IoIosPlay } from 'react-icons/io';
import data from '@/pages/album/data/songs.json';
import SongOfAlbum from './components/list/song';
import { sliceToolControl } from '@/redux/slice';
import FanAlsoLike from './components/list/fanAlsoLike';
export function handleStyleViewTool() {
	const isViewTool = sliceToolControl.useGetState().open;
	const sliceData = isViewTool ? 5 : 7;
	const className = isViewTool ? '2xl:grid-cols-5' : '2xl:grid-cols-7';
	return {
		className,
		sliceData,
	};
}
function AlbumDesktop() {
	return (
		<ResponsiveDesktop>
			<section className='flex flex-col h-albumDk rounded-2xl relative bg-primary_dark-10 animate-translateBottom_duration_0dot8 overflow-auto scrollHiddenY'>
				<article className='min-h-[400px] w-full flex items-center relative'>
					<div className='relative z-10 px-10 flex flex-col gap-4 animate-translateBottom_duration_1dot2'>
						<div className='flex items-center gap-2'>
							<GoVerified className='text-2xl' />
							{Localize('VERIFIED_ARTIST')}
						</div>
						<h2 className='text-8xl font-bold'>Lil Nas X</h2>
						<p className='text-xl'>
							24,010,072 {Localize('MONTHLY_LISTENER')}
						</p>
					</div>
					<div
						style={{
							backgroundImage: `url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
						}}
						className='absolute top-0 right-0 w-full h-full bg-cover bg-center rounded-t-xl'
					/>
					<div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r rounded-t-xl from-primary_dark-10/70' />
				</article>
				<div className='px-10 bg-gradient-to-b from-[#FFAD60]/10 from-10% to-primary_dark '>
					<article className='relative'>
						<div className='w-20 h-20 left-10 bg-primary_dark-20 absolute -top-10 rounded-full flex justify-center duration-500 items-center transition-transform hover:scale-110 cursor-pointer'>
							<IoIosPlay className='text-5xl' />
						</div>
						<div className='py-4 gap-8 items-center flex justify-between pt-16'>
							<p className='text-3xl'>{Localize('POPULAR')}</p>
							<div className='flex gap-4 items-center'>
								<FollowButton className='!bg-primary_dark-20 w-32' />
								<div className='min-w-10 h-10 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
									<BsThreeDots className='text-lg cursor-pointer' />
								</div>
							</div>
						</div>
						<div className='px-3 pb-3'>
							<SongOfAlbum data={data.songs} />
						</div>
					</article>
					<article className='pt-10'>
						<div className='py-4 gap-8 items-center flex justify-between'>
							<p className='text-3xl'>
								{Localize('FAN_ALSO_LIKE')}
							</p>
							<p className='hover:underline cursor-pointer'>
								{Localize('SHOW_ALL')}
							</p>
						</div>
						<FanAlsoLike />
					</article>
				</div>
			</section>
		</ResponsiveDesktop>
	);
}

export default AlbumDesktop;
