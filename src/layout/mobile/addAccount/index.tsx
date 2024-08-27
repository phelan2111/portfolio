import Button from '@/components/root/button';
import ButtonIconStart from '@/components/ui/button/iconStart';
import LogoComponent from '@/components/ui/common/logo';
import { useRedirect } from '@/hooks/useRedirect';
import Localize from '@/langs';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { MdOutlineClose, MdOutlinePhoneIphone } from 'react-icons/md';

function AddAccountMobile() {
	const { redirectPrev } = useRedirect();

	return (
		<main className='h-screen w-screen bg-primary_dark-20'>
			<header className='flex text-white relative w-full justify-center py-4 animate-translateBottom_duration_0dot8'>
				<h4 className='text-lg font-bold'>{Localize('ADD_ACCOUNT')}</h4>
				<MdOutlineClose
					onClick={redirectPrev}
					className='absolute top-4 right-3 text-2xl'
				/>
			</header>
			<section className='h-addAccount animate-translateBottom_duration_0dot8'>
				<div className='px-4 py-10 flex flex-col justify-between gap-10 h-full'>
					<div className='w-full flex justify-center'>
						<LogoComponent />
					</div>
					<div className='text-center text-xl font-bold dark:text-white'>
						<p>{Localize('MILLIONS_OF_SONG')}</p>
						<p>{Localize('FREE_ON_COHESIVE_MUSIC')}</p>
					</div>
					<div className='flex flex-col gap-2'>
						<Button
							className='!rounded-3xl font-bold dark:text-white text-sm hover:scale-95'
							text='SIGN_UP_FREE'
						/>
						<ButtonIconStart
							className='!rounded-3xl font-bold text-sm bg-transparent border border-neutral dark:text-white hover:scale-95'
							icon={<MdOutlinePhoneIphone />}
							text='CONTINUE_WITH_PHONE_NUMBER'
						/>
						<ButtonIconStart
							className='!rounded-3xl font-bold text-sm bg-transparent border border-neutral dark:text-white hover:scale-95'
							icon={<FaGoogle />}
							text='CONTINUE_WITH_GG'
						/>
						<ButtonIconStart
							className='!rounded-3xl font-bold text-sm bg-transparent border border-neutral dark:text-white hover:scale-95'
							icon={<FaFacebookF />}
							text='CONTINUE_WITH_FACEBOOK'
						/>
						<Button
							className='!rounded-3xl font-bold text-sm bg-transparent dark:text-white hover:scale-95'
							text='LOG_IN'
						/>
					</div>
					<p className='text-sm text-center dark:text-white'>
						{Localize('WHILE_YOU_ARE_SIGNED')}
					</p>
				</div>
			</section>
		</main>
	);
}

export default AddAccountMobile;
