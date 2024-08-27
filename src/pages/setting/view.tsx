import ScreenResponsive from '@/components/ui/responsive/screen';
import SettingMobile from '@/layout/mobile/setting';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <SettingMobile />}
			desktop={() => <div>Setting Desktop</div>}
		/>
	);
}

export default View;
