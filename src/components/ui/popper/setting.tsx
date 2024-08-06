import PopperTopLeft from '@/components/root/popper/topLeft';
import { FaHistory, FaPlus, FaRegComment } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineSettings } from 'react-icons/md';
import Avatar from '@/components/root/image/avatar';
import Localize from '@/langs';
import { PATH_REDIRECT } from '@/utils/enums';
import { useNavigate } from 'react-router-dom';
const settingPopup = [
	{
		text: 'ADD_ACCOUNT',
		icon: <FaPlus />,
		className: 'animate-translateRight_duration_1dot3 ml-16',
		path: PATH_REDIRECT.ADD_ACCOUNT,
	},
	{
		text: 'WHAT_NEW',
		icon: <FaRegComment />,
		className: 'animate-translateRight_duration_1dot6 ml-28',
		path: PATH_REDIRECT.WHAT_NEWS,
	},
	{
		text: 'LISTEN_HISTORY',
		icon: <FaHistory />,
		className: 'animate-translateRight_duration_1dot9 ml-16',
		path: PATH_REDIRECT.ADD_ACCOUNT,
	},
	{
		text: 'SETTING',
		icon: <MdOutlineSettings className='text-xl' />,
		className: 'animate-translateRight_duration_2dot2',
		path: PATH_REDIRECT.ADD_ACCOUNT,
	},
];
function PopperSetting() {
	const navigate = useNavigate();

	return (
		<PopperTopLeft
			renderMainContent={(propsRender) => {
				return (
					<Avatar
						onClick={propsRender.onOpen}
						src='https://i.pinimg.com/564x/91/a7/5b/91a75bb16f881c2211700a1e513ea98d.jpg'
					/>
				);
			}}
			renderPopper={(propsRender) => {
				return (
					<div
						key={`${propsRender.isOpen}`}
						className='h-full w-full flex items-center'>
						<div className='p-4 flex flex-col gap-14 relative'>
							<div className='flex gap-4 items-center animate-translateRight'>
								<img
									className='w-12 h-12 rounded-full object-cover'
									src='https://i.pinimg.com/736x/8c/3e/e8/8c3ee85d414e357d9b924ee788d3394e.jpg'
									alt='https://i.pinimg.com/736x/8c/3e/e8/8c3ee85d414e357d9b924ee788d3394e.jpg'
								/>
								<div className='flex flex-col'>
									<p className='text-sm font-bold'>
										Lee Min New
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
											navigate(setting.path);
										}}
										key={setting.text}
										className={`flex items-center gap-4 w-fit shadow-insetAllSide  pl-2 pr-4 py-1 rounded-2xl ${setting.className}`}>
										<div className='w-8 h-8 flex items-center justify-center rounded-full'>
											<FaPlus />
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
