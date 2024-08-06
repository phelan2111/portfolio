import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH } from '@/routes/config';

function Component() {
	const navigate = useNavigate();

	const handleRedirectSignUp = () => {
		navigate(PATH.KYC.SIGN_UP);
	};
	return <View onRedirectSignUp={handleRedirectSignUp} />;
}

export default Component;
