import SignUpMobile from '@/layout/mobile/kyc/signUp';

interface IViewProps {
	onSubmit: VoidFunction;
}

function View(props: IViewProps) {
	return <SignUpMobile {...props} />;
}

export default View;
