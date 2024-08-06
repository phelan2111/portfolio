import PopperTopLeft from '@/components/root/popper/topLeft';
import { FaHistory, FaPlus, FaRegComment } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineSettings } from 'react-icons/md';
import Avatar from '@/components/root/image/avatar';
import Localize from '@/langs';
import { PATH } from '@/routes/config';
import { useRedirect } from '@/hooks/useRedirect';
const settingPopup = [
	{
		text: 'ADD_ACCOUNT',
		icon: <FaPlus />,
		className: 'animate-translateRight_duration_1dot3 ml-16',
		path: PATH.ADD_ACCOUNT,
	},
	{
		text: 'WHAT_NEW',
		icon: <FaRegComment />,
		className: 'animate-translateRight_duration_1dot6 ml-28',
		path: PATH.WHAT_NEWS,
	},
	{
		text: 'LISTEN_HISTORY',
		icon: <FaHistory />,
		className: 'animate-translateRight_duration_1dot9 ml-16',
		path: PATH.LISTENING_HISTORY._,
	},
	{
		text: 'SETTING',
		icon: <MdOutlineSettings className='text-xl' />,
		className: 'animate-translateRight_duration_2dot2',
		path: PATH.SETTING,
	},
];
function PopperSetting() {
	const { redirectPage } = useRedirect();

	return (
		<PopperTopLeft
			renderMainContent={(propsRender) => {
				return (
					<Avatar
						onClick={propsRender.onOpen}
						src='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
					/>
				);
			}}
			renderPopper={(propsRender) => {
				return (
					<div
						key={`${propsRender.isOpen}`}
						className='h-full w-full flex items-center'>
						<div className='p-4 flex flex-col gap-14 relative'>
							<div
								aria-hidden
								onClick={() => {
									redirectPage(PATH.PROFILE);
								}}
								className='flex gap-4 items-center animate-translateRight'>
								<img
									className='w-12 h-12 rounded-full object-cover'
									src='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
									alt='https://i.pinimg.com/564x/ad/f2/b2/adf2b26f6a419fe0e507f3526d57c5b4.jpg'
								/>
								<div className='flex flex-col'>
									<p className='text-sm font-bold'>
										Chaos Fegu
									</p>
									<p className='text-[10px]'>
										{Localize('VIEW_PROFILE')}
									</p>
								</div>
							</div>
							{settingPopup.map((setting) => {
								return (
									<div
										aria-hidden
										onClick={() => {
											redirectPage(setting.path);
										}}
										key={setting.text}
										className={`flex items-center gap-4 w-fit shadow-insetAllSide  pl-2 pr-4 py-1 rounded-2xl ${setting.className}`}>
										<div className='w-8 h-8 flex items-center justify-center rounded-full'>
											{setting.icon}
										</div>
										<p className='text-sm'>
											{Localize(setting.text)}
										</p>
									</div>
								);
							})}
							<div
								aria-hidden
								onClick={propsRender.onClose}
								className='absolute top-[210px] flex items-center justify-center shadow-insetAllSide rounded-full animate-translateRight_duration_2dot2'>
								<div className='animate-spin_dur_4s w-14 h-14 relative border border-[#5a4ff3] rounded-xl before:absolute before:right-0 before:top-0 before:border before:border-[#35a2d2] before:w-full before:h-full before:rotate-45 before:rounded-xl' />
							</div>
							<div
								aria-hidden
								onClick={propsRender.onClose}
								className='absolute top-[230px] left-9 animate-translateRight_duration_2dot2'>
								<IoMdClose />
							</div>
						</div>
					</div>
				);
			}}
		/>
	);
}

export default PopperSetting;
