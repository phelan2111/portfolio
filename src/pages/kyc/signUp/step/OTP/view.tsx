import ScreenResponsive from '@/components/ui/responsive/screen';
import OTPDesktop from '@/layout/desktop/kyc/otp';
import OTP from '@/layout/mobile/kyc/otp';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return (
		<ScreenResponsive
			mobile={() => <OTP {...props} />}
			desktop={() => <OTPDesktop {...props} />}
		/>
	);
}

export default View;
