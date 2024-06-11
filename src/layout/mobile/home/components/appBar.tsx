import Avatar from '@/core/image/avatar';
import Tabs, { IItemTab } from '@/core/tabs';
enum TabsEnum {
	all = 0,
	music,
	podcasts,
}
const tabs: IItemTab<TabsEnum>[] = [
	{
		text: 'ALL',
		value: TabsEnum.all,
	},
	{
		text: 'MUSIC',
		value: TabsEnum.music,
	},
	{
		text: 'PODCAST',
		value: TabsEnum.podcasts,
	},
];

function AppBar() {
	return (
		<header className='select-none flex gap-4 items-center sticky top-0 h-fit'>
			<Avatar src='https://i.pinimg.com/564x/91/a7/5b/91a75bb16f881c2211700a1e513ea98d.jpg' />
			<Tabs tab={tabs[0]} tabs={tabs} />
		</header>
	);
}

export default AppBar;
