import Tabs, { IItemTab } from '@/components/root/tabs';
import { useRedirect } from '@/hooks/useRedirect';
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

function AppBarTop() {
	const { redirectPage } = useRedirect();
	const handleDefaultTab = (): IItemTab<string> => {
		const tabActive = tabs.find((i) => i.value === location.pathname);
		if (tabActive) {
			return tabActive;
		}
		return tabs[0];
	};
	return (
		<header className='select-none flex gap-4 items-center sticky top-0 h-fit z-50 snap-start animate-translateBottom_duration_1dot2'>
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

export default AppBarTop;
