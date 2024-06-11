import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH_REDIRECT } from '@/utils/enums';

function Component() {
	const navigate = useNavigate();

	const handleRedirectSignIn = () => {
		navigate(PATH_REDIRECT.KYC.SIGN_IN);
	};
	return <View onRedirectSignIn={handleRedirectSignIn} />;
}

export default Component;
