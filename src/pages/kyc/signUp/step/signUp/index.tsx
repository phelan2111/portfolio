import Component from './component';

export interface ISignUpUserProps {
	onSignUpSuccess: VoidFunction;
}
function SignUpUser(props: ISignUpUserProps) {
	return <Component {...props} />;
}

export default SignUpUser;
