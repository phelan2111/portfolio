import PopperTopLeft from '@/components/root/popper/topLeft';
import { FaHistory, FaPlus, FaRegComment } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineSettings } from 'react-icons/md';
import Avatar from '@/components/root/image/avatar';

function PopperSetting() {
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
									<p className='text-[10px]'>View profile</p>
								</div>
							</div>
							<div className='flex items-center gap-4 ml-16 w-fit shadow-insetAllSide  pl-2 pr-4 py-1 rounded-2xl animate-translateRight_duration_1dot3'>
								<div className='w-8 h-8 flex items-center justify-center rounded-full'>
									<FaPlus />
								</div>
								<p className='text-sm'>Add account</p>
							</div>
							<div className='flex items-center gap-4 ml-28 shadow-insetAllSide pl-2 pr-4 py-1 rounded-2xl animate-translateRight_duration_1dot6'>
								<div className='w-8 h-8 flex items-center justify-center rounded-full'>
									<FaRegComment />
								</div>
								<p className='text-sm'>{`What's new`}</p>
							</div>
							<div className='flex items-center gap-4 ml-16  pl-2 pr-4 w-fit py-1 rounded-2xl shadow-insetAllSide animate-translateRight_duration_1dot9'>
								<div className='w-8 h-8  flex items-center justify-center rounded-full'>
									<FaHistory />
								</div>
								<p className='text-sm'>Listen history</p>
							</div>
							<div className='flex items-center gap-4 shadow-insetAllSide w-fit pl-2 pr-4 py-1 rounded-2xl animate-translateRight_duration_2dot2'>
								<div className='w-8 h-8 flex items-center justify-center rounded-full'>
									<MdOutlineSettings className='text-xl' />
								</div>
								<p className='text-sm'>Setting</p>
							</div>
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
