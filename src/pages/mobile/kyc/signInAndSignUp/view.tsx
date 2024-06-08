import AuthLayout from '@/components/layout/auth';
import SignIn from './form/signIn';
import SignUp from './form/signUp';
import { StepKYC } from '.';

interface IViewProps {
	onChangeStepSignIn: VoidFunction;
	onChangeStepSignUp: VoidFunction;
	step: StepKYC;
}

function View(props: IViewProps) {
	function ComponentStep() {
		if (StepKYC.signIn === props.step) {
			return <SignIn onChangeSignUp={props.onChangeStepSignUp} />;
		}
		return <SignUp onChangeSignIn={props.onChangeStepSignIn} />;
	}

	return (
		<AuthLayout>
			<ComponentStep />
		</AuthLayout>
	);
}

export default View;
