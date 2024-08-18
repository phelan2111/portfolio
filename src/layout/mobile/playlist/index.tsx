import BottomNavigate, { links } from '@/components/root/navigate/bottom';
import PlaySong from '@/components/ui/play/song';
import { useRedirect } from '@/hooks/useRedirect';
import Localize from '@/langs';
import { IoArrowBackSharp } from 'react-icons/io5';
import data from './data/playlist.json';
import { isToday, isYesterday } from '@/utils/helper';
import dayjs from 'dayjs';
import HorizontalItem from '@/components/ui/item/horizontal';
import { LuDot } from 'react-icons/lu';
import PopperBottom from '@/components/root/popper/bottom';
import MenuIcon, { IItemIcon } from '@/components/ui/menu/icon';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
	BsCloudDownloadFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
} from 'react-icons/bs';

const handleRenderDate = (createAt: number) => {
	if (isYesterday(createAt)) {
		return Localize('YESTERDAY');
	}
	if (isToday(createAt)) {
		return Localize('TODAY');
	}
	return dayjs(createAt).format('ddd, MMM, D, YYYY');
};

function PlaylistMobile() {
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
		<main className='h-screen w-screen lg:hidden block bg-primary_dark-20 text-white pb-40 overflow-auto snap-mandatory snap-y'>
			<header className='flex text-white relative w-full justify-center py-4 animate-translateBottom_duration_0dot8 snap-start'>
				<h4 className='text-lg font-bold'>
					{handleRenderDate(data.createAt)}
				</h4>
				<div
					aria-hidden
					onClick={redirectPrev}
					className='size-6 flex items-center justify-center bg-transparent absolute left-4 top-5'>
					<IoArrowBackSharp className='text-xl' />
				</div>
			</header>
			<article className='snap-start animate-translateBottom_duration_0dot8'>
				<div className='relative w-full flex justify-center items-center p-4'>
					<div className='relative rounded-xl flex flex-col gap-2 p-1'>
						<div className='bg-primary_dark relative  z-10 p-4 rounded-xl text-center  flex justify-center items-center font-bold overflow-hidden before:absolute before:h-20 gap-4 before:w-64 before:animate-spin_dur_4s before:bg-gradient-to-t before:from-indigo-500 before:via-purple-500 before:to-pink-500 after:absolute after:bg-primary_dark after:inset-1 after:rounded-lg'>
							<img
								className='size-16 rounded-lg relative z-10 object-cover'
								src={data.cover}
								alt={data.cover}
							/>
							<div className='pt-2'>
								<p className='font-semibold relative z-10 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
									{data.name}
								</p>
								<p className='text-[10px] relative z-10 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
									{Localize('PLAYLIST')}
								</p>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${data.cover})`,
						}}
						className='absolute w-full h-full bg-cover blur-xl'
					/>
				</div>
			</article>
			<section className='p-4 pt-8 flex flex-col gap-4 animate-translateBottom_duration_1dot2'>
				<h3 className='font-semibold text-xs'>
					{Localize('TRACKS_YOU_PLAYED')}
				</h3>
				<div className='flex flex-col gap-3'>
					{data.songs.map((song) => {
						return (
							<HorizontalItem
								className='snap-start'
								key={song.cover}
								image={{
									className: 'rounded-sm size-14',
									fieldImage: 'image',
								}}
								item={{
									image: song.cover,
								}}
								extends={{
									icon: (
										<PopperBottom
											render={(renderProps) => {
												return (
													<MenuIcon
														onClose={
															renderProps.onClose
														}
														items={itemsMenu}
													/>
												);
											}}>
											<HiOutlineDotsVertical />
										</PopperBottom>
									),
								}}
								render={() => {
									return (
										<div className='flex flex-col gap-1'>
											<h6 className='text-base'>
												{song.name}
											</h6>
											<p className='flex items-center text-xs text-white/60'>
												{Localize('SONG')} <LuDot />{' '}
												{Localize('COHESIVE_MUSIC')}
											</p>
										</div>
									);
								}}
							/>
						);
					})}
				</div>
			</section>
			<BottomNavigate defaultPath={links[0]} />
			<PlaySong />
		</main>
	);
}

export default PlaylistMobile;
