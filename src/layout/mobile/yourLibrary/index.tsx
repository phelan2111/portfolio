import TextField from '@/components/root/inputs/textField';
import PopperBottomRight from '@/components/root/popper/bottomRight';
import Localize from '@/langs';
import { GoPlus } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';
import data from './data/data.json';
import FilterChip, { IItemFilterChip } from '@/components/ui/filter/chip';
import YourLibraryAlbumItem from '@/components/ui/item/yourLibrary/album';
const filter: IItemFilterChip[] = [
	{
		label: 'Playlist',
		value: 'Playlist',
		children: [
			{
				label: 'Playlist',
				value: 'Playlist',
			},
			{
				label: 'By you',
				value: 'By you',
			},
			{
				label: 'By Cohesive',
				value: 'By Cohesive',
			},
		],
	},
	{
		label: 'Podcasts',
		value: 'Podcasts',
	},
	{
		label: 'Artist',
		value: 'Artist',
	},
	{
		label: 'Download',
		value: 'Download',
	},
];
function YourLibraryMobile() {
	return (
		<div className='flex flex-col'>
			<header className='flex items-center justify-between p-4 sticky top-0 z-20'>
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
											<p className='text-sm text-center'>
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
			<article className='px-4 pb-4'>
				<FilterChip data={filter} />
			</article>
			<article className='flex flex-col gap-4 h-yourLibrary relative z-10 overflow-y-auto snap-mandatory snap-y p-4'>
				{data.map((i) => {
					return <YourLibraryAlbumItem key={i.image} {...i} />;
				})}
			</article>
		</div>
	);
}

export default YourLibraryMobile;
