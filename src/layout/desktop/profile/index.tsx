import Headers from '@/components/ui/common/headers/normal';
// import About from './about';	
// import Personal from './personal';
import Work from './work';

const ProfileDesktop = () => {
	return (
		<div className='w-screen h-screen relative'>
			<Headers />
			{/* <About /> */}
			{/* <Personal /> */}
			<Work />
		</div>
	);
};

export default ProfileDesktop;
