import LinkNavigateBottom, {
	IItemLinkBottom,
} from '@/components/link/navigateBottom';
import { PATH } from '@/routes/config';
import { useLayoutEffect, useState } from 'react';
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';
import { IoLibraryOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

const links: IItemLinkBottom[] = [
	{
		path: PATH.HOME,
		text: 'HOME',
		icon: <HiOutlineHome />,
		className: 'left-[1px]',
	},
	{
		path: PATH.SEARCH,
		text: 'SEARCH',
		icon: <HiOutlineSearch />,
		className: 'left-[70px]',
	},
	{
		path: PATH.YOUR_LIBRARY,
		text: 'YOUR_LIBRARY',
		icon: <IoLibraryOutline />,
		className: 'left-[152px]',
	},
];
function BottomNavigate() {
	const navigate = useNavigate();
	const location = useLocation();
	const [linkState, setLinkState] = useState<IItemLinkBottom>(links[0]);
	const itemActive = links.find((i) => linkState.path === i.path);

	const handleClick = (item: IItemLinkBottom) => {
		setLinkState(item);
		navigate(item.path);
	};

	useLayoutEffect(() => {
		const linksActive = links.find((i) => i.path === location.pathname);
		if (linksActive) {
			setLinkState(linksActive);
		}
	}, [location.pathname]);

	return (
		<div className='fixed bottom-0 w-full select-none bg-primary_light rounded-t-3xl z-40 shadow-insetTop flex lg:hidden'>
			<div className='flex gap-8 m-auto w-fit px-2 py-4 relative'>
				<div
					className={`w-12 h-12 absolute transition-all duration-300 -top-6 dark:bg-primary_dark rounded-full shadow-bootstrapLarge ${itemActive?.className}`}
				/>
				{links.map((link) => {
					const isActive = link.path === linkState.path;
					return (
						<LinkNavigateBottom
							onClick={() => {
								handleClick(link);
							}}
							key={BottomNavigate.name + link.text}
							isActive={isActive}
							item={link}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default BottomNavigate;
