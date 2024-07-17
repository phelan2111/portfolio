import Wrapper from '@/components/root/wrapper';
import { Outlet } from 'react-router-dom';

function AuthWrapper() {
	return (
		<Wrapper className='flex justify-center items-center'>
			<Outlet />
		</Wrapper>
	);
}

export default AuthWrapper;
