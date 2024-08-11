import InformationSignUpDesktop from '@/layout/desktop/kyc/information';
import InformationSignUpMobile from '@/layout/mobile/kyc/information';
import { Fragment } from 'react';

interface IViewProps {
	onSubmit: VoidFunction;
}
function View(props: IViewProps) {
	return (
		<Fragment>
			<InformationSignUpMobile onSubmit={props.onSubmit} />
			<InformationSignUpDesktop onSubmit={props.onSubmit} />
		</Fragment>
	);
}

export default View;
