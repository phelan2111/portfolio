import avatarI from '@/assets/profile/avatar.jpg';

const AvatarProfile = () => {
	return (
		<div>
			<div className='absolute top-0 left-0'>
				<div className='loader-avatar'></div>
			</div>
			<img className='size-64 min-w-6size-64 object-cover rounded-full relative' src={avatarI} alt='avatar' />
		</div>
	);
};

export default AvatarProfile;
