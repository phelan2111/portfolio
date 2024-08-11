import Component from './component';

export interface IOTPSignUpProps {
	onSubmit: VoidFunction;
}
function OTPSignUp(props: IOTPSignUpProps) {
	return <Component {...props} />;
}

export default OTPSignUp;
