import Localize from '@/langs';

function YourLibraryMobile() {
	return (
		<div className='p-4 flex flex-col gap-4'>
			<header className='flex gap-3 items-center'>
				<img
					className='w-8 h-8 rounded-full object-cover'
					src='https://i.pinimg.com/564x/aa/ee/b7/aaeeb7276ffe0509e396512a62badbd9.jpg'
					alt='https://i.pinimg.com/564x/aa/ee/b7/aaeeb7276ffe0509e396512a62badbd9.jpg'
				/>
				<h6 className='text-lg font-semibold'>
					{Localize('YOUR_LIBRARY')}
				</h6>
			</header>
			<article>qweqwe</article>
		</div>
	);
}

export default YourLibraryMobile;
