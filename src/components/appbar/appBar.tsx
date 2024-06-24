import Avatar from '@/core/image/avatar';
import Tabs, { IItemTab } from '@/core/tabs';
import { PATH_REDIRECT } from '@/utils/enums';
import { useNavigate } from 'react-router-dom';

const tabs: IItemTab<string>[] = [
	{
		text: 'ALL',
		value: PATH_REDIRECT.HOME,
	},
	{
		text: 'MUSIC',
		value: PATH_REDIRECT.MUSIC,
	},
	{
		text: 'PODCAST',
		value: PATH_REDIRECT.PODCASTS,
	},
];

function AppBar() {
	const navigate = useNavigate();

	const handleRedirect = (dataItem: IItemTab<unknown>) => {
		navigate(dataItem.value as string);
	};

	return (
		<header className='select-none flex gap-4 items-center sticky top-0 h-fit bg-primary_dark p-4 z-20 snap-start'>
			<Avatar src='https://i.pinimg.com/564x/91/a7/5b/91a75bb16f881c2211700a1e513ea98d.jpg' />
			<Tabs onChange={handleRedirect} tabDefault={tabs[0]} tabs={tabs} />
		</header>
	);
}

export default AppBar;
