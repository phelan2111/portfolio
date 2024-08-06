import HorizontalItem from '@/components/ui/item/horizontal';
import Localize from '@/langs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { LuDot } from 'react-icons/lu';
import data from '../data/played.json';
import { isToday, isYesterday } from '@/utils/helper';
import dayjs from 'dayjs';
import { Fragment } from 'react/jsx-runtime';
import PopperBottom from '@/components/root/popper/bottom';
import MenuIcon, { IItemIcon } from '@/components/ui/menu/icon';
import { useRedirect } from '@/hooks/useRedirect';
import { PATH } from '@/routes/config';

const handleRenderDate = (createAt: number) => {
	if (isYesterday(createAt)) {
		return Localize('YESTERDAY');
	}
	if (isToday(createAt)) {
		return Localize('TODAY');
	}
	return dayjs(createAt).format('ddd, MMM, D, YYYY');
};

interface IPlaylistProps {
	itemMenus: IItemIcon[];
}

function Playlist(props: IPlaylistProps) {
	const { redirectPage } = useRedirect();
	return (
		<Fragment>
			{data.map((playlist) => {
				const songs = [...playlist.songs].splice(0, 3);
				return (
					<div
						key={playlist.cover}
						className='flex flex-col gap-2 px-4 snap-start pt-4'>
						<h4 className='font-bold'>
							{handleRenderDate(playlist.createAt)}
						</h4>
						<ul>
							<HorizontalItem
								image={{
									className: 'rounded-sm size-14',
									fieldImage: 'image',
								}}
								item={{
									image: playlist.cover,
								}}
								render={() => {
									return (
										<div className='flex flex-col gap-1'>
											<h6 className='text-base'>
												{playlist.name}
											</h6>
											<p className='flex items-center text-xs text-white/60'>
												{Localize('PLAYLIST')} <LuDot />{' '}
												{Localize('COHESIVE_MUSIC')}
											</p>
										</div>
									);
								}}
							/>
							<li className='py-4 pl-4 flex flex-col gap-3'>
								{songs.map((song) => {
									return (
										<HorizontalItem
											key={song.cover}
											image={{
												className: 'rounded-sm size-10',
												fieldImage: 'image',
											}}
											item={{
												image: song.cover,
											}}
											extends={{
												icon: (
													<PopperBottom
														render={(
															renderProps,
														) => {
															return (
																<MenuIcon
																	onClose={
																		renderProps.onClose
																	}
																	items={
																		props.itemMenus
																	}
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
															{Localize(
																'PLAYLIST',
															)}{' '}
															<LuDot />{' '}
															{song.singer}
														</p>
													</div>
												);
											}}
										/>
									);
								})}
								{playlist.songs.length > 3 && (
									<p
										aria-hidden
										onClick={() => {
											redirectPage(
												`${PATH.PLAYLIST._}/${playlist.id}`,
											);
										}}
										className='py-2 text-sm'>
										{Localize('SEE_ALL')} (
										{playlist.songs.length - 3}){' '}
										{Localize('PLAYED')}
									</p>
								)}
							</li>
						</ul>
					</div>
				);
			})}
		</Fragment>
	);
}

export default Playlist;
