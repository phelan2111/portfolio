import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH } from '@/routes/config';

function Component() {
	const navigate = useNavigate();

	const handleRedirectHome = () => {
		navigate(PATH.HOME);
	};
	return <View onRedirectHome={handleRedirectHome} />;
}

export default Component;
