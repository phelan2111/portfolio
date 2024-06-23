import SignUpMobile from '@/layout/mobile/kyc/signUp';
import { STEP_SIGN_UP } from './types';
import OTP from '@/layout/mobile/kyc/otp';
import Information from '@/layout/mobile/kyc/information';

interface IComponentStepProps extends IViewProps {
	step: STEP_SIGN_UP;
}
function ComponentStep(props: IComponentStepProps) {
	switch (props.step) {
		case STEP_SIGN_UP.VERIFY: {
			return <OTP {...props} />;
		}
		case STEP_SIGN_UP.INFORMATION: {
			return <Information {...props} />;
		}
		default: {
			return <SignUpMobile {...props} />;
		}
	}
}

interface IViewProps {
	onRedirectSignIn: VoidFunction;
	onConfirmUserName: VoidFunction;
	onVerify: VoidFunction;
	onCreateProfile: VoidFunction;
	step: STEP_SIGN_UP;
}
function View(props: IViewProps) {
	return <ComponentStep {...props} />;
}

export default View;
