import Button from '@/components/root/button';
import PopperBottom from '@/components/root/popper/bottom';
import HorizontalItem from '@/components/ui/item/horizontal';
import MenuIcon, { IItemIcon } from '@/components/ui/menu/icon';
import { useRedirect } from '@/hooks/useRedirect';
import Localize from '@/langs';
import data from './data/playlist.json';
import {
	BsCloudDownloadFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
} from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoArrowBackSharp } from 'react-icons/io5';

function ProfileMobile() {
	const { redirectPrev } = useRedirect();
	const itemsMenu: IItemIcon[] = [
		{
			icon: <BsFillPlusCircleFill />,
			text: 'ADD_TO_YOUR_LIBRARY',
			onClick: () => {},
		},
		{
			icon: <BsCloudDownloadFill />,
			text: 'DOWNLOAD',
			onClick: () => {},
		},
		{
			icon: <BsFillXOctagonFill />,
			text: 'NOT_INTERESTED',
			onClick: () => {},
		},
	];
	return (
		<main className='h-screen w-screen bg-primary_dark-20 text-white pb-40 md:hidden block'>
			<header className='flex text-white relative w-full justify-center py-4 animate-translateBottom_duration_0dot8'>
				<h4 className='text-lg font-bold'>{Localize('PROFILE')}</h4>
				<IoArrowBackSharp
					className='absolute left-4 top-5 text-xl'
					aria-hidden
					onClick={redirectPrev}
				/>
			</header>
			<section className='relative flex flex-col gap-4 animate-translateBottom_duration_0dot8'>
				<div className='w-full relative'>
					<div
						className='w-full h-52 bg-cover'
						style={{
							backgroundImage:
								'url(https://i.pinimg.com/736x/60/63/da/6063da107454d50c1d7786cc2c2bac75.jpg)',
						}}
					/>
					<img
						className='size-32 object-cover rounded-full m-auto absolute -bottom-16 left-4 border-4 border-primary_dark-20'
						src='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
						alt='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
					/>
					<div className='absolute left-36 translate-x-2 -bottom-12'>
						<h6 className='text-xl font-bold'>Chaos Pegu</h6>
						<p className='text-xs font-light'>
							0 {Localize('FOLLOWERS')}, 3 {Localize('FOLLOWING')}
						</p>
					</div>
				</div>
				<div className='px-4 flex gap-2 mt-16'>
					<Button>{Localize('EDIT_PROFILE')}</Button>
					<PopperBottom
						render={(renderProps) => {
							return (
								<div>
									<div className='flex items-center px-6 py-4 gap-4 border-b border-primary_dark-10'>
										<img
											className='size-10 rounded-full object-cover'
											src='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
											alt='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
										/>
										<p className='font-bold'>Chaos Pegu</p>
									</div>
									<MenuIcon
										onClose={renderProps.onClose}
										items={itemsMenu}
									/>
								</div>
							);
						}}>
						<Button className='min-w-10 flex justify-center items-center'>
							<HiOutlineDotsVertical />
						</Button>
					</PopperBottom>
				</div>
				<div className='px-4 flex flex-col gap-2'>
					<p className='font-bold'>{Localize('PLAYLIST')}</p>
					<div className='flex flex-col gap-4'>
						{data.map((played) => {
							return (
								<HorizontalItem
									key={played.image}
									item={{
										image: played.image,
									}}
									image={{
										className: 'size-14 rounded-lg',
										fieldImage: 'image',
									}}
									render={() => {
										return (
											<div className='flex flex-col gap-1'>
												<h6 className='text-sm'>
													{played.name}
												</h6>
												<p className='flex items-center text-xs text-white/60 lowercase'>
													{played.save}{' '}
													{Localize('SAVES')}
												</p>
											</div>
										);
									}}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}

export default ProfileMobile;
