import FilterChip, { IItemFilterChip } from '@/components/ui/filter/chip';
import YourLibraryAlbumItem from '@/components/ui/item/album';
import { IItemLinkBottom } from '@/components/ui/link/navigateBottom';
import Localize from '@/langs';
import { PATH } from '@/routes/config';
import { useId, useLayoutEffect, useState } from 'react';
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';
import { IoLibraryOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import data from '@/layout/mobile/yourLibrary/data/data.json';
import SearchYourLibrary from '@/components/ui/input/search/yourLibrary';
import { LuLayoutPanelLeft } from 'react-icons/lu';
import AnimationScale from '../animation/scale';

export const links: IItemLinkBottom[] = [
	{
		path: PATH.HOME,
		text: 'HOME',
		icon: <HiOutlineHome className='text-2xl' />,
	},
	{
		path: PATH.SEARCH,
		text: 'SEARCH',
		icon: <HiOutlineSearch className='text-2xl' />,
	},
];
const filter: IItemFilterChip[] = [
	{
		label: 'Playlist',
		value: 'Playlist',
		children: [
			{
				label: 'Playlist',
				value: 'Playlist',
			},
			{
				label: 'By you',
				value: 'By you',
			},
			{
				label: 'By Cohesive',
				value: 'By Cohesive',
			},
		],
	},
	{
		label: 'Podcasts',
		value: 'Podcasts',
	},
	{
		label: 'Artist',
		value: 'Artist',
	},
	{
		label: 'Download',
		value: 'Download',
	},
];

interface INavigateLeftProps {
	defaultPath?: IItemLinkBottom;
}

function NavigateLeft(props: INavigateLeftProps) {
	const key = useId();
	const navigate = useNavigate();
	const location = useLocation();
	const [linkState, setLinkState] = useState<IItemLinkBottom>(links[0]);

	const handleClick = (item: IItemLinkBottom) => {
		setLinkState(item);
		navigate(item.path);
	};

	useLayoutEffect(() => {
		if (props.defaultPath) {
			setLinkState(props.defaultPath);
		} else {
			const linksActive = links.find((i) => i.path === location.pathname);
			if (linksActive) {
				setLinkState(linksActive);
			}
		}
	}, [location.pathname, props.defaultPath]);

	return (
		<div className='lg:block hidden px-4 py-6'>
			<ul className='flex flex-col gap-4'>
				{links.map((link) => {
					const itemActive = linkState.path === link.path;
					if (!itemActive) {
						return (
							<li
								key={key}
								aria-hidden
								onClick={() => {
									handleClick(link);
								}}
								className='w-full rounded-3xl translate3d-yourLibrary relative group overflow-hidden hover:bg-white/10 cursor-pointer transition-all duration-700 animate-translateBottom_duration_0dot8'>
								<div className='flex items-center gap-2 px-4 py-4'>
									{link.icon}
									<p className='relative z-20 font-bold pt-1'>
										{Localize(link.text)}
									</p>
									<div className='absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500' />
									<div className='absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500' />
									<div className='absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500' />
									<div className='absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600' />
								</div>
							</li>
						);
					}
					return (
						<li
							aria-hidden
							onClick={() => {
								handleClick(link);
							}}
							key={key}
							className={
								'w-full rounded-3xl relative translate3d-yourLibrary group overflow-hidden cursor-pointer transition-all duration-700 bg-white/40 text-primary_dark animate-translateBottom_duration_0dot8'
							}>
							<div className='flex items-center gap-2 px-4 py-4'>
								{link.icon}
								<p className='relative z-20 font-bold pt-1'>
									{Localize(link.text)}
								</p>
								<div className='absolute -top-1 -right-2 z-10 w-16 h-16 rounded-full scale-150 duration-700 bg-yellow-500' />
								<div className='absolute -top-1 -right-2 z-10 w-12 h-12 rounded-full scale-150 duration-700 bg-orange-500' />
								<div className='absolute -top-1 -right-2 z-10 w-8 h-8 rounded-full scale-150 duration-700 bg-pink-500' />
								<div className='absolute -top-1 -right-2 z-10 w-4 h-4 rounded-full scale-150 duration-700 bg-red-600' />
							</div>
						</li>
					);
				})}
				<li className='animate-translateBottom_duration_0dot8'>
					<div className='bg-primary_dark-10 rounded-3xl'>
						<div className='flex items-center gap-2 px-4 py-4'>
							<IoLibraryOutline />
							<p className='relative z-20 font-bold pt-1'>
								{Localize('YOUR_LIBRARY')}
							</p>
						</div>
						<article className='px-4 pb-4 animate-translateBottom_duration_0dot8'>
							<FilterChip data={filter} />
						</article>
						<article className='px-4 pb-4 flex justify-between items-center animate-translateBottom_duration_0dot8'>
							<SearchYourLibrary onChange={() => void 0} />
							<AnimationScale>
								<div className='h-10 w-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer'>
									<LuLayoutPanelLeft />
								</div>
							</AnimationScale>
						</article>
						<article className='pb-4 pt-2 pr-4'>
							<div className='flex flex-col gap-4 h-yourLibraryDk scrollHiddenY relative z-10 overflow-y-auto snap-mandatory snap-y p-4 animate-translateBottom_duration_0dot8'>
								{data.map((i) => {
									return (
										<YourLibraryAlbumItem
											key={i.image}
											{...i}
										/>
									);
								})}
							</div>
						</article>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default NavigateLeft;
