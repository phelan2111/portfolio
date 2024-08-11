import SignUpDesktop from '@/layout/desktop/kyc/signUp';
import SignUpMobile from '@/layout/mobile/kyc/signUp';
import { Fragment } from 'react';

interface IViewProps {
	onSubmit: VoidFunction;
}

function View(props: IViewProps) {
	return (
		<Fragment>
			<SignUpMobile {...props} />
			<SignUpDesktop {...props} />
		</Fragment>
	);
}

export default View;
