import Wrapper from '@/components/root/wrapper';
import { Outlet } from 'react-router-dom';
import ParallaxWrap from './parallax';

function AuthWrapper() {
	return (
		<Wrapper
			extends={<ParallaxWrap />}
			className='flex justify-center items-center relative h-screen overflow-hidden'>
			<Outlet />
		</Wrapper>
	);
}

export default AuthWrapper;
