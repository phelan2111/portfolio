import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH_REDIRECT } from '@/utils/enums';

function Component() {
	const navigate = useNavigate();

	const handleRedirectSignUp = () => {
		navigate(PATH_REDIRECT.KYC.SIGN_UP);
	};
	return <View onRedirectSignUp={handleRedirectSignUp} />;
}

export default Component;
