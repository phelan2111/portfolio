import Tabs, { IItemTab } from '@/components/root/tabs';

import { useLocation, useNavigate } from 'react-router-dom';
import PopperSetting from '../popper/setting';
import { PATH } from '@/routes/config';

const tabs: IItemTab<string>[] = [
	{
		text: 'ALL',
		value: PATH.HOME,
	},
	{
		text: 'MUSIC',
		value: PATH.MUSIC._,
	},
	{
		text: 'PODCAST',
		value: PATH.PODCASTS._,
	},
];

function AppBar() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleRedirect = (dataItem: IItemTab<unknown>) => {
		navigate(dataItem.value as string);
	};
	const handleDefaultTab = (): IItemTab<string> => {
		const tabActive = tabs.find((i) => i.value === location.pathname);
		if (tabActive) {
			return tabActive;
		}
		return tabs[0];
	};

	return (
		<header className='select-none flex gap-4 items-center sticky top-0 h-fit bg-primary_dark p-4 z-50 snap-start animate-translateBottom_duration_0dot8'>
			<PopperSetting />
			<Tabs
				onChange={handleRedirect}
				tabDefault={handleDefaultTab()}
				tabs={tabs}
			/>
		</header>
	);
}

export default AppBar;
