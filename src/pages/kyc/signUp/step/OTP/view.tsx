import OTP from '@/layout/mobile/kyc/otp';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return <OTP {...props} />;
}

export default View;
