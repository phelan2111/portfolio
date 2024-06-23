import { useNavigate } from 'react-router-dom';
import View from './view';
import { PATH_REDIRECT } from '@/utils/enums';

function Component() {
	const navigate = useNavigate();

	const handleRedirectHome = () => {
		navigate(PATH_REDIRECT.HOME);
	};
	return <View onRedirectHome={handleRedirectHome} />;
}

export default Component;
