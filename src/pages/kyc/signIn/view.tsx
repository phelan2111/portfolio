import SignInMobile from '@/layout/mobile/kyc/signIn';

interface IViewProps {
	onRedirectSignUp: VoidFunction;
}
function View(props: IViewProps) {
	return <SignInMobile {...props} />;
}

export default View;
