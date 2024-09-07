import ResponsiveDesktop from '@/components/ui/responsive/desktop';
import RecentSearches from './list/recent';
import AppBarTop from '@/components/ui/appbar/top';
import BrowseAll from './list/browseAll';
import { sliceToolControl } from '@/redux/slice';

export function handleStyleViewTool() {
	const isViewTool = sliceToolControl.useGetState().open;
	const sliceData = isViewTool ? 3 : 5;
	const className = isViewTool
		? '2xl:grid-cols-3 xl:grid-cols-1'
		: '2xl:grid-cols-5 xl:grid-cols-2';
	const classNameItem = isViewTool ? 'h-72 w-72' : 'h-56 w-56';
	return {
		className,
		sliceData,
		classNameItem,
	};
}

function SearchDesktop() {
	return (
		<ResponsiveDesktop>
			<div className='flex flex-col gap-5'>
				<AppBarTop />
				<section className='w-full animate-translateBottom_duration_0dot8 flex flex-col gap-8 pb-4 lg:h-desktopWrapper lg:overflow-auto scrollHiddenY pr-3'>
					<RecentSearches />
					<BrowseAll />
				</section>
			</div>
		</ResponsiveDesktop>
	);
}

export default SearchDesktop;
