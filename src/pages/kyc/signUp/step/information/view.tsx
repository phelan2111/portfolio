import InformationSignUpMobile from '@/layout/mobile/kyc/information';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return <InformationSignUpMobile onSubmit={props.onSubmit} />;
}

export default View;
