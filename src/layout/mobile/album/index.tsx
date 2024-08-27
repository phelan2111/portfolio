import PopperBottom from '@/components/root/popper/bottom';
import Video from '@/components/root/video/video';
import {
	BsBroadcast,
	BsChevronCompactLeft,
	BsCloudDownloadFill,
	BsFillFileCodeFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
	BsShareFill,
} from 'react-icons/bs';
import { FaPlayCircle, FaUserAstronaut } from 'react-icons/fa';
import { LiaRandomSolid } from 'react-icons/lia';
import SongOfAlbum from './components/list/song';
import { GoDownload, GoKebabHorizontal, GoPlus } from 'react-icons/go';
import IconBootstrapLarge from '@/components/ui/icon/iconBootstrapLarge';
import data from './data/songs.json';
import MenuIcon, { IItemIcon } from '@/components/ui/menu/icon';
import { useRedirect } from '@/hooks/useRedirect';
import { PATH } from '@/routes/config';

interface IAlbumMobileProps {}

function AlbumMobile(props: IAlbumMobileProps) {
	const { redirectPage } = useRedirect();
	console.log('AlbumMobile', props);
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
		{
			icon: <BsFillPlusCircleFill />,
			text: 'ADD_TO_PLAYLIST',
			onClick: () => {},
		},
		{
			icon: <FaUserAstronaut />,
			text: 'VIEW_ARTISTS',
			onClick: () => {},
		},
		{
			icon: <BsShareFill />,
			text: 'SHARE',
			onClick: () => {},
		},
		{
			icon: <BsBroadcast />,
			text: 'GO_TO_ALBUM_RADIO',
			onClick: () => {},
		},
		{
			icon: <BsFillFileCodeFill />,
			text: 'SHOW_CODE',
			onClick: () => {},
		},
	];

	return (
		<div className='w-full flex flex-col gap-4 overflow-y-auto h-album snap-mandatory snap-y'>
			<div className='snap-start animate-translateBottom_duration_0dot8'>
				<div className='relative w-full flex justify-center items-center p-4'>
					<div className='relative rounded-xl flex flex-col gap-2 p-1'>
						<div className='bg-primary_dark relative overflow-hidden z-10 p-4 rounded-xl text-center flex flex-col justify-center items-center font-bold before:absolute before:h-[150%] before:w-20 before:animate-spin_dur_4s before:bg-gradient-to-t before:from-indigo-500 before:via-purple-500 before:to-pink-500 after:absolute after:bg-primary_dark after:inset-1 after:rounded-lg'>
							<img
								className='h-52 w-52 rounded-xl relative z-10'
								src='https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg'
								alt='https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg'
							/>
							<div
								style={{
									backgroundImage: `url(https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg)`,
								}}
								className='absolute w-full h-full bg-cover blur-xl'
							/>
							<div className='pt-2'>
								<p className='font-semibold relative z-10 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
									{data.name}
								</p>
								<p className='text-[10px] relative z-10 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
									{data.singers.join('')}
								</p>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg)`,
						}}
						className='absolute w-full h-full bg-cover blur-xl'
					/>
					<div
						aria-hidden
						onClick={() => {
							redirectPage(PATH.HOME);
						}}
						className='absolute top-4 left-4 bg-primary_dark shadow-bootstrapLarge p-2 rounded-full'>
						<BsChevronCompactLeft />
					</div>
				</div>
			</div>
			<div className='animate-translateBottom_duration_0dot8'>
				<div className='flex flex-col gap-2 px-4 snap-start'>
					<p className='text-sm'>2h 33min</p>
					<article className='flex justify-between items-center'>
						<div className='flex gap-8 items-center'>
							<div className='w-12 h-12 shadow-bootstrapLarge rounded-md overflow-auto'>
								<Video
									mute={true}
									autoPlay
									src='https://res.cloudinary.com/dkvhfe4uu/video/upload/v1718469569/justFriend_oximsk.mp4'
									track='https://res.cloudinary.com/dkvhfe4uu/video/upload/v1718469569/justFriend_oximsk.mp4'
								/>
							</div>
							<IconBootstrapLarge>
								<GoPlus className='text-md hover:scale-110 transition-transform duration-300 cursor-pointer' />
							</IconBootstrapLarge>
							<IconBootstrapLarge>
								<GoDownload className='text-md hover:scale-110 transition-transform duration-300 cursor-pointer' />
							</IconBootstrapLarge>
							<PopperBottom
								render={(renderProps) => {
									return (
										<MenuIcon
											onClose={renderProps.onClose}
											items={itemsMenu}
										/>
									);
								}}>
								<IconBootstrapLarge>
									<GoKebabHorizontal className='text-lg rotate-90' />
								</IconBootstrapLarge>
							</PopperBottom>
						</div>
						<div className='flex gap-3 items-center'>
							<IconBootstrapLarge>
								<LiaRandomSolid className='text-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
							</IconBootstrapLarge>
							<FaPlayCircle className='text-5xl hover:scale-110 transition-transform duration-300 cursor-pointer shadow-bootstrapLarge rounded-full' />
						</div>
					</article>
				</div>
				<div className='px-4'>
					<SongOfAlbum data={data.songs} />
				</div>
			</div>
		</div>
	);
}

export default AlbumMobile;
