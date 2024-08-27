import ScreenResponsive from '@/components/ui/responsive/screen';
import SearchDesktop from '@/layout/desktop/search';
import SearchMobile from '@/layout/mobile/search';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <SearchMobile />}
			desktop={() => <SearchDesktop />}
		/>
	);
}

export default View;
