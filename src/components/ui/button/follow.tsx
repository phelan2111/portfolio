import Button from '@/components/root/button';
import Localize from '@/langs';

function FollowButton() {
	return (
		<Button className='w-fit px-3 !rounded-3xl buttonFollow !transition-colors duration-700 !bg-primary_dark-10 hover:!bg-primary_dark-20'>
			<div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-sm'>
				{Localize('UN_FOLLOW')}
			</div>
		</Button>
	);
}

export default FollowButton;
