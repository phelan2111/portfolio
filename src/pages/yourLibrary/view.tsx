import ScreenResponsive from '@/components/ui/responsive/screen';
import YourLibraryMobile from '@/layout/mobile/yourLibrary';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <YourLibraryMobile />}
			desktop={() => <div>YourLibrary Desktop</div>}
		/>
	);
}

export default View;
