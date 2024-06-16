import PopperBottom from '@/core/popper';
import Localize from '@/langs';
import { CiVolumeMute } from 'react-icons/ci';
import { FaPlayCircle, FaUserAstronaut } from 'react-icons/fa';
import { GoDotFill, GoPlusCircle } from 'react-icons/go';
import { SlOptionsVertical } from 'react-icons/sl';
import MenuIcon, { IItemIcon } from '../menu/icon';
import {
	BsBroadcast,
	BsChevronLeft,
	BsChevronRight,
	BsCloudDownloadFill,
	BsFillFileCodeFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
	BsShareFill,
} from 'react-icons/bs';
import { Fragment } from 'react/jsx-runtime';
import { TypeToTry } from '@/utils/enums';
import Video from '@/core/video/video';
import { useCallback, useEffect, useState } from 'react';
import AnimationScrollElement from '@/core/animation/scrollByElement';

interface IToTryCardProps {
	name: string;
	nameSingle: string;
	image?: string;
	id: string;
	type: TypeToTry;
	album?: string[];
}

function ToTryCard(props: IToTryCardProps) {
	const [indexSelectVideo, setIndexSelectVideo] = useState<number>(0);

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

	const handlePlayVideo = useCallback((): HTMLVideoElement => {
		const elementVideo: HTMLVideoElement = document.querySelector(
			`#video${props.id}`,
		) as HTMLVideoElement;
		return elementVideo;
	}, [props.id]);
	const handleScroll = (isIntoView: boolean) => {
		if (!handlePlayVideo()) {
			return;
		}
		if (isIntoView) {
			handlePlayVideo().play();
		} else {
			handlePlayVideo().pause();
			handlePlayVideo().currentTime = 0;
		}
	};
	const handleNextVideo = () => {
		const nextIndex = indexSelectVideo + 1;
		if (props.album) {
			if (nextIndex > props.album?.length - 1) {
				setIndexSelectVideo(0);
			} else {
				setIndexSelectVideo(nextIndex);
			}
		}
	};
	const handlePrevVideo = () => {
		const nextIndex = indexSelectVideo - 1;
		if (props.album) {
			if (nextIndex < 0) {
				setIndexSelectVideo(props.album?.length - 1);
			} else {
				setIndexSelectVideo(nextIndex);
			}
		}
	};

	useEffect(() => {
		handlePlayVideo()?.play();
	}, [handlePlayVideo, indexSelectVideo]);

	const ContentCardImage = () => {
		return (
			<Fragment>
				<div className='flex justify-between relative z-10 w-full bg-gradient-to-b from-primary_dark/65 to-primary_dark/0 h-fit p-3 items-center'>
					<div className='flex gap-3 h-fit'>
						<img
							className='h-20 w-20 rounded-md object-cover'
							src={props.image}
							alt={props.image}
						/>
						<div className='w-48'>
							<h4 className='line-clamp-2'>{props.name}</h4>
							<p className='flex gap-2 text-xs items-center text-white/80'>
								<span>{Localize('SINGLE')}</span>
								<GoDotFill className='text-[10px]' />
								<span>{props.nameSingle}</span>
							</p>
						</div>
					</div>
					<div>
						<GoPlusCircle className='text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer' />
					</div>
				</div>
				<div className='flex justify-between items-center p-4'>
					<div className='bg-primary_dark/70 cursor-pointer relative z-10 rounded-3xl font-semibold flex px-3 py-2 hover:bg-primary_dark/90 transition-colors duration-300 items-center gap-2'>
						<CiVolumeMute className='text-lg' />
						<p className='text-xs'>{Localize('PREVIEW_ALBUM')}</p>
					</div>
					<div className='flex items-center gap-4'>
						<PopperBottom
							render={(renderProps) => {
								return (
									<MenuIcon
										onClose={renderProps.onClose}
										items={itemsMenu}
									/>
								);
							}}>
							<SlOptionsVertical className='text-lg' />
						</PopperBottom>
						<FaPlayCircle className='text-3xl relative z-10' />
					</div>
				</div>
			</Fragment>
		);
	};
	if (props.type === TypeToTry.album) {
		return (
			<AnimationScrollElement
				idElementScroll='homeMobile'
				onScroll={handleScroll}
				id={props.id}>
				<div
					id={props.id}
					className='h-96 rounded-lg relative overflow-hidden snap-start'>
					<div
						key={indexSelectVideo.toString()}
						className='absolute z-0 w-full h-full animate-translateToTry'>
						<Video
							mute={true}
							id={`video${props.id}`}
							src={props.album?.[indexSelectVideo] ?? ''}
							track={props.image ?? ''}
						/>
					</div>
					<div className='top-0 h-full w-full flex flex-col justify-between'>
						<div
							aria-hidden
							onClick={handlePrevVideo}
							className='absolute left-5 top-1/2 cursor-pointer w-7 h-7 transition-all duration-300 bg-black/30 hover:scale-110 hover:bg-black/40 flex justify-center items-center rounded-full'>
							<BsChevronLeft />
						</div>
						<ContentCardImage />
						<div
							aria-hidden
							onClick={handleNextVideo}
							className='absolute right-5 top-1/2 cursor-pointer  w-7 h-7 transition-all duration-300 bg-black/30 hover:scale-110 hover:bg-black/40 flex justify-center items-center rounded-full'>
							<BsChevronRight />
						</div>
					</div>
				</div>
			</AnimationScrollElement>
		);
	}

	return (
		<AnimationScrollElement
			idElementScroll='homeMobile'
			animation='animate-bgScale'
			id={props.id}>
			<div
				style={{
					backgroundImage: `url(${props.image})`,
				}}
				id={props.id}
				className={
					'flex flex-col justify-between w-full bg-center rounded-lg snap-start transition-all duration-500 bg-125% h-96'
				}>
				<ContentCardImage />
			</div>
		</AnimationScrollElement>
	);
}

export default ToTryCard;
