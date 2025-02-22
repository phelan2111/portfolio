import Headers from '@/components/ui/common/headers/normal';
// import About from './about';	
import Personal from './personal';

const ProfileDesktop = () => {
	return (
		<div className='w-screen h-screen relative'>
			<Headers />
			{/* <About /> */}
			<Personal />
		</div>
	);
};

export default ProfileDesktop;
