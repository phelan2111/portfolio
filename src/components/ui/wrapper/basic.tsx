import Wrapper from '@/components/root/wrapper';
import { Outlet } from 'react-router-dom';

function BasicWrapper() {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
}

export default BasicWrapper;
