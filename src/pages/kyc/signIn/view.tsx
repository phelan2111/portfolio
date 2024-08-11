import SignInDesktop from '@/layout/desktop/kyc/signIn';
import SignInMobile from '@/layout/mobile/kyc/signIn';
import { Fragment } from 'react/jsx-runtime';

function View() {
	return (
		<Fragment>
			<SignInMobile />
			<SignInDesktop />
		</Fragment>
	);
}

export default View;
