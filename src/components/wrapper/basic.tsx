import BottomNavigate from '@/core/navigate/bottom';
import Wrapper from '@/core/wrapper';
import { Outlet } from 'react-router-dom';

function BasicWrapper() {
	return (
		<Wrapper>
			<Outlet />
			<BottomNavigate />
		</Wrapper>
	);
}

export default BasicWrapper;
