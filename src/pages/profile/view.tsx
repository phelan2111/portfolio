import ScreenResponsive from '@/components/ui/responsive/screen';
import ProfileMobile from '@/layout/mobile/profile';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <ProfileMobile />}
			desktop={() => <div>Profile Desktop</div>}
		/>
	);
}

export default View;
