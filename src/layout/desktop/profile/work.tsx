import { GrLinkNext } from 'react-icons/gr';

function Work() {
	return (
		<div className='bg-primary_dark w-screen h-screen'>
			<article className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full'>qweqwe</article>
			<article className='fixed bottom-[90px] translate-x-[20%] right-[0%]'>
				<div className='flex group items-end bg-gradient-to-r from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 px-5 rounded-l-full'>
					<div className='text-white w-full h-full'>
						<div className='transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<p className='text-sm uppercase text-nowrap tracking-[10px] group-hover:translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>project</span>
							</p>
							<div className='group-hover:translate-x-3 transition-all duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
						</div>
					</div>
				</div>
			</article>
			<article className='fixed top-[140px] left-0'>
				<div className='flex group items-end bg-gradient-to-l from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 pr-7 pl-4 rounded-r-full'>
					<div className='text-white w-full h-full'>
						<div className=' transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<div className='group-hover:-translate-x-3 transition-all rotate-180 duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
							<p className='text-sm uppercase text-nowrap leading-10 tracking-[10px] group-hover:-translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>about</span>
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}

export default Work;
