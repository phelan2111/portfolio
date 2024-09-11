import ResponsiveDesktop from '@/components/ui/responsive/desktop';

function PodcastsDetailsDesktop() {
	return (
		<ResponsiveDesktop>
			<section className='flex flex-col h-albumDk rounded-2xl relative bg-primary_dark-10 animate-translateBottom_duration_0dot8 overflow-auto scrollHiddenY'>
				<article className='min-h-[400px] w-full flex items-center relative'>
					<div className='relative z-10 px-10 flex flex-col gap-4 animate-translateBottom_duration_1dot2'>
						<div className='flex items-center gap-2'></div>
						<h2 className='text-8xl font-bold'>Lil Nas X</h2>
						<p className='text-xl'>24,010,072</p>
					</div>
					<div
						style={{
							backgroundImage: `url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
						}}
						className='absolute top-0 right-0 w-full h-full bg-cover bg-center rounded-t-xl'
					/>
					<div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r rounded-t-xl from-primary_dark-10/70' />
				</article>
				<div className='px-10'>qweqwe</div>
			</section>
		</ResponsiveDesktop>
	);
}

export default PodcastsDetailsDesktop;
