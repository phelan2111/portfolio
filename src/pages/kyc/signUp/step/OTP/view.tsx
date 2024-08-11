import OTPDesktop from '@/layout/desktop/kyc/otp';
import OTP from '@/layout/mobile/kyc/otp';
import { Fragment } from 'react/jsx-runtime';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return (
		<Fragment>
			<OTP {...props} />
			<OTPDesktop {...props} />
		</Fragment>
	);
}

export default View;
