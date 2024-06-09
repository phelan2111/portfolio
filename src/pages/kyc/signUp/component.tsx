import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH } from '@/routes/config';

function Component() {
	const navigate = useNavigate();

	const handleRedirectSignIn = () => {
		navigate(PATH.KYC.SIGN_IN);
	};
	return <View onRedirectSignIn={handleRedirectSignIn} />;
}

export default Component;
