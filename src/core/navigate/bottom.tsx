import LinkNavigateBottom, {
	IItemLinkBottom,
} from '@/components/link/navigateBottom';
import { PATH } from '@/routes/config';
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
	const itemActive = links.find((i) => i.path === location.pathname);

	return (
		<div className='fixed bottom-0 w-full select-none bg-primary_light rounded-t-3xl shadow-insetTop'>
			<div className='flex gap-8 m-auto w-fit px-2 py-4 relative'>
				<div
					className={`w-12 h-12 absolute transition-all duration-300 -top-6 dark:bg-primary_dark rounded-full shadow-bootstrapLarge ${itemActive?.className}`}
				/>
				{links.map((link) => {
					const isActive = location.pathname === link.path;
					return (
						<LinkNavigateBottom
							onClick={() => {
								navigate(link.path);
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
