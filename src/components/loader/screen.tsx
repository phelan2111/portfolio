import Localize from '@/langs';
import LogoComponent from '../common/logo';

function LoaderScreen() {
	return (
		<div className='fixed w-screen h-screen bg-primary_dark z-50 right-0 top-0 flex items-center justify-center'>
			<div className='flex justify-center flex-col items-center'>
				<LogoComponent />
				<div className='mt-2 px-2 py-2 rounded-sm text-center w-full text-primary_light'>
					<h4 className='font-bold text-lg'>
						{Localize('COHESIVE_MUSIC')}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default LoaderScreen;
