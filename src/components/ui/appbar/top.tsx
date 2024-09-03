import Tabs, { IItemTab } from '@/components/root/tabs';
import { useRedirect } from '@/hooks/useRedirect';
import { PATH } from '@/routes/config';
import InputSearchDesktop from '../input/search/desktop';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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

function ViewTool() {
	const { redirectPage } = useRedirect();
	const isSearch = location.pathname === PATH.SEARCH;
	const handleDefaultTab = (): IItemTab<string> => {
		const tabActive = tabs.find((i) => i.value === location.pathname);
		if (tabActive) {
			return tabActive;
		}
		return tabs[0];
	};

	if (isSearch) {
		return <InputSearchDesktop />;
	}
	return (
		<header className='select-none flex gap-4 items-center sticky top-0 h-fit z-50 snap-start animate-translateBottom_duration_0dot8'>
			<Tabs
				onChange={(dataItem: IItemTab<unknown>) => {
					redirectPage(dataItem.value as string);
				}}
				tabDefault={handleDefaultTab()}
				tabs={tabs}
			/>
		</header>
	);
}

function AppBarTop() {
	return (
		<div className='bg-primary_dark-10 w-full p-6 rounded-3xl flex flex-col gap-8 animate-translateBottom_duration_0dot8'>
			<div className='flex justify-between items-center'>
				<ViewTool />
				<div className='flex gap-2 animate-translateBottom_duration_0dot8'>
					<div className='w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center items-center hover:scale-110 cursor-pointer'>
						<FaAngleLeft />
					</div>
					<div className='w-8 h-8 bg-primary_dark-20 rounded-full flex justify-center hover:scale-110 items-center cursor-pointer opacity-50'>
						<FaAngleRight />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AppBarTop;
