import GradientCard from '@/components/card/gradient';
import { BsChevronCompactLeft } from 'react-icons/bs';

function AlbumMobile() {
	return (
		<div className='w-full p-4'>
			<div className='relative w-full flex justify-center items-center'>
				<GradientCard />
				<div className='absolute top-0 left-0 shadow-bootstrapLarge p-2 rounded-full'>
					<BsChevronCompactLeft />
				</div>
			</div>
		</div>
	);
}

export default AlbumMobile;
