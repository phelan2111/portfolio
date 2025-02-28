const Headers = () => {
	return (
		<header className='fixed top-0 left-0 z-10 w-full bg-white/10 backdrop-blur-sm py-4'>
			<div className='max-w-[1440px] m-auto w-full flex justify-between items-center'>
				<div className='border-r-[1px] border-white/20 pr-8'>
					<h1 className='text-5xl text-white font-semibold'>PheLan</h1>
				</div>
				<div className='text-white'>
					<ul className='flex'>
						<li className='w-32 text-center cursor-pointer text-sm opacity-60 hover:opacity-100 transition-opacity duration-500'>
							<p>ABOUT</p>
						</li>
						<li className='w-32 text-center cursor-pointer text-sm opacity-60 hover:opacity-100 transition-opacity duration-500'>
							<p>WORKS</p>
						</li>
						<li className='w-32 text-center cursor-pointer text-sm opacity-60 hover:opacity-100 transition-opacity duration-500'>
							<p>SKILLS</p>
						</li>
						<li className='w-32 text-center cursor-pointer text-sm opacity-60 hover:opacity-100 transition-opacity duration-500'>
							<p>PROJECTS</p>
						</li>
					</ul>
				</div>
				<div className='border-l-[1px] border-white/20 h-[48px] pl-8 flex items-center justify-center'>
					<h1 className='text-sm text-white uppercase cursor-pointer'>Social network</h1>
				</div>
				<div className='absolute bottom-0 left-0 h-px w-full'>
					<div className='light'></div>
				</div>
			</div>
		</header>
	);
};

export default Headers;
