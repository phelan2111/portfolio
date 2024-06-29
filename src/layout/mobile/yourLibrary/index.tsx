import TextField from '@/core/inputs/textField';
import PopperBottomRight from '@/core/popper/bottomRight';
import Localize from '@/langs';
import { GoPlus } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';

function YourLibraryMobile() {
	return (
		<div className='p-4 flex flex-col gap-4'>
			<header className='flex items-center justify-between'>
				<div className='flex gap-3 items-center'>
					<img
						className='w-8 h-8 rounded-full object-cover'
						src='https://i.pinimg.com/564x/aa/ee/b7/aaeeb7276ffe0509e396512a62badbd9.jpg'
						alt='https://i.pinimg.com/564x/aa/ee/b7/aaeeb7276ffe0509e396512a62badbd9.jpg'
					/>
					<h6 className='text-lg font-semibold'>
						{Localize('YOUR_LIBRARY')}
					</h6>
				</div>
				<div className='flex text-2xl gap-3 items-center'>
					<PopperBottomRight
						renderMainContent={(renderProps) => {
							return (
								<IoIosSearch
									onClick={renderProps.onOpen}
									className='hover:text-3xl transition-all duration-500'
								/>
							);
						}}
						renderPopper={(renderProps) => {
							return (
								<section
									className='flex flex-col justify-between'
									key={`${renderProps.isOpen}`}>
									<article className='flex items-center bg-primary_dark p-2 animate-translateLeft_duration_2s'>
										<div
											aria-hidden
											onClick={renderProps.onClose}
											className='min-w-10 h-10 rounded-full flex items-center justify-center'>
											<IoArrowBackOutline />
										</div>
										<div className='w-full'>
											<TextField
												placeholder={Localize(
													'SEARCH_YOUR_LIBRARY',
												)}
												classNameInput='text-primary_light'
												className='!bg-transparent hover:!shadow-none focus-within:!shadow-none'
											/>
										</div>
									</article>
									<article className='place-content-end py-4'>
										<div className='p-4 flex flex-col gap-2 place-items-center h-fit animate-translateLeft_duration_2dot3s'>
											<h4 className='text-xl'>
												{Localize(
													'FIND_YOUR_FAVORITES',
												)}
											</h4>
											<p className='text-sm'>
												{Localize(
													'SEARCH_EVERYTHING_YOU_HAVE_SAVE',
												)}
											</p>
										</div>
									</article>
								</section>
							);
						}}
					/>
					<GoPlus className='hover:text-3xl transition-all duration-500' />
				</div>
			</header>
			<article>qweqwe</article>
		</div>
	);
}

export default YourLibraryMobile;
