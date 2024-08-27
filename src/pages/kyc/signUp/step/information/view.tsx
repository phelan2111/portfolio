import ScreenResponsive from '@/components/ui/responsive/screen';
import InformationSignUpDesktop from '@/layout/desktop/kyc/information';
import InformationSignUpMobile from '@/layout/mobile/kyc/information';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return (
		<ScreenResponsive
			mobile={() => <InformationSignUpMobile onSubmit={props.onSubmit} />}
			desktop={() => (
				<InformationSignUpDesktop onSubmit={props.onSubmit} />
			)}
		/>
	);
}

export default View;
