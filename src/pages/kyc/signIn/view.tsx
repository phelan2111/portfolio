import ScreenResponsive from '@/components/ui/responsive/screen';
import SignInDesktop from '@/layout/desktop/kyc/signIn';
import SignInMobile from '@/layout/mobile/kyc/signIn';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <SignInMobile />}
			desktop={() => <SignInDesktop />}
		/>
	);
}

export default View;
