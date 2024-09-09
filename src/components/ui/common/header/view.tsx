import Localize from '@/langs';
import LogoComponent from '../logo';
import { IoNotificationsOutline } from 'react-icons/io5';
import { PATH } from '@/routes/config';

interface IViewProps {
	onClickTab: (path: string) => void;
	isSearch: boolean;
}

function View(props: IViewProps) {
	return (
		<header className='flex-col gap-6 hidden lg:flex'>
			<div className='w-full gap-6 flex'>
				<div className='bg-primary_dark-10 p-4 rounded-3xl w-full'>
					<div className='flex w-full justify-between items-end h-full'>
						<div className='w-fit h-14 overflow-hidden flex justify-center items-center gap-6 -translate-x-6'>
							<div>
								<div className='scale-50 w-28 -translate-y-1'>
									<LogoComponent />
								</div>
							</div>
							<div className='text-xl items-end h-full hidden xxl:flex font-bold'>
								{Localize('COHESIVE_MUSIC')}
							</div>
						</div>
						<div className='flex items-end gap-20 relative px-8 h-full'>
							<div className='bg-primary_dark w-[130%] h-full absolute -top-10 -right-10 rounded-s-full'>
								<ul className='flex gap-20 items-center h-full justify-center'>
									<li className='relative w-full flex justify-end'>
										<div className='absolute -top-3 z-20 right-[22px] shadow-materialDesign w-4 h-4 bg-primary_dark-10 rounded-full' />
										<div
											style={{
												clipPath:
													'polygon(50% 0%, 25% 100%, 75% 100%)',
											}}
											className={`absolute z-10 bg-gradient-to-b transition-all -right-1.5 top-0 duration-500 w-[70px] h-[40px] ${
												!props.isSearch
													? 'from-white/30'
													: 'from-white/0'
											}`}
										/>
									</li>
									<li className='relative w-full flex justify-end'>
										<div className='absolute -top-3 z-20 left-2.5 shadow-materialDesign w-4 h-4 bg-primary_dark-10 rounded-full' />
										<div
											style={{
												clipPath:
													'polygon(50% 0%, 25% 100%, 75% 100%)',
											}}
											className={`absolute z-10 transition-all -left-4 top-0 duration-500 w-[70px] h-[40px] ${
												!props.isSearch
													? 'bg-transparent'
													: 'bg-gradient-to-b from-white/30'
											}`}
										/>
									</li>
								</ul>
							</div>
							<ul className='flex gap-20 items-end h-full relative'>
								<li
									className='h-full '
									aria-hidden
									onClick={() => {
										props.onClickTab(PATH.HOME);
									}}>
									<div
										className={`flex gap-2 font-bold text-3x h-full items-end cursor-pointer bg-clip-text text-transparent bg-gradient-to-r ${
											props.isSearch
												? 'from-white/100 to-white/90'
												: 'from-pink-500 to-violet-500'
										}`}>
										<span>{Localize('HOME')}</span>
									</div>
								</li>
								<li
									aria-hidden
									onClick={() => {
										props.onClickTab(PATH.SEARCH);
									}}>
									<div
										className={`flex gap-2 font-bold text-3x h-full items-end cursor-pointer bg-clip-text text-transparent bg-gradient-to-r ${
											!props.isSearch
												? 'from-white/100 to-white/90'
												: 'from-pink-500 to-violet-500'
										}`}>
										<span>{Localize('SEARCH')}</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='flex gap-2 bg-primary_dark-10 py-4 px-6 rounded-3xl items-center'>
					<div className='min-w-10 h-10 bg-primary_dark-20 rounded-full flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
						<IoNotificationsOutline className='text-lg' />
					</div>
					<div className='p-2 bg-primary_dark-20 rounded-full flex justify-center h-fit items-center transition-transform hover:scale-110 cursor-pointer'>
						<img
							className='min-w-6 h-6 rounded-full'
							src='https://i.pinimg.com/736x/42/d1/6f/42d16fffa8c6c6124a7bd66ddc818c39.jpg'
							alt='https://i.pinimg.com/736x/42/d1/6f/42d16fffa8c6c6124a7bd66ddc818c39.jpg'
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default View;
