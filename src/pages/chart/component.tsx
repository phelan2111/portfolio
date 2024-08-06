import { PATH } from '@/routes/config';
import View from './view';
import { useNavigate } from 'react-router-dom';

function Component() {
	const navigate = useNavigate();

	const handleRedirectMusic = () => {
		navigate(PATH.MUSIC._);
	};
	return <View onRedirectMusic={handleRedirectMusic} />;
}

export default Component;
