import { useLocation, useNavigate } from 'react-router-dom';
import View from './view';
import { PATH } from '@/routes/config';

function Component() {
	const navigate = useNavigate();
	const location = useLocation();
	const isSearch = location.pathname === PATH.SEARCH;

	const handleClick = (path: string) => {
		navigate(path);
	};
	return <View isSearch={isSearch} onClickTab={handleClick} />;
}

export default Component;
