import { PATH_REDIRECT } from '@/utils/enums';
import View from './view';
import { useNavigate } from 'react-router-dom';

function Component() {
	const navigate = useNavigate();

	const handleRedirectMusic = () => {
		navigate(PATH_REDIRECT.MUSIC);
	};
	return <View onRedirectMusic={handleRedirectMusic} />;
}

export default Component;
