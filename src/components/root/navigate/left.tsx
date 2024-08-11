import { IItemLinkBottom } from '@/components/ui/link/navigateBottom';
import Localize from '@/langs';
import { PATH } from '@/routes/config';
import { useId, useLayoutEffect, useState } from 'react';
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

export const links: IItemLinkBottom[] = [
	{
		path: PATH.HOME,
		text: 'HOME',
		icon: <HiOutlineHome />,
	},
	{
		path: PATH.SEARCH,
		text: 'SEARCH',
		icon: <HiOutlineSearch />,
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
		<div className='lg:flex hidden px-2 py-6'>
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
								className='w-60 rounded-3xl relative group overflow-hidden hover:bg-white/10 cursor-pointer transition-all duration-700'>
								<div className='flex items-center gap-2 px-4 py-4'>
									<HiOutlineHome className='text-2xl' />
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
								'w-60 shadow-navigateRight rounded-3xl relative group overflow-hidden cursor-pointer transition-all duration-700 bg-white/70 text-primary_dark'
							}>
							<div className='flex items-center gap-2 px-4 py-4'>
								<HiOutlineHome className='text-2xl' />
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
			</ul>
		</div>
	);
}

export default NavigateLeft;
