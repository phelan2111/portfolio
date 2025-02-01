import videoWay from '@/assets/videos/videoWay.mp4';
import AnimBlock from '@/components/ui/anim/block';
import { GrLinkNext } from 'react-icons/gr';

const About = () => {
	return (
		<div className='w-screen h-screen relative'>
			<div>
				<video className='w-full' muted autoPlay loop>
					<source src={videoWay} type='video/mp4' />
					<track kind='captions' src='sampleCaptions.vtt' srcLang='en' />
				</video>
			</div>
			<div className='bg-black/50 w-full h-full absolute top-0 left-0'></div>
			<div className='absolute top-0 left-0 w-full h-full pt-20'>
				<div className='max-w-[1440px] m-auto gap-10 py-20 h-full flex flex-col justify-center'>
					<div className='flex gap-5 justify-between'>
						<div className='text-white text-6xl flex flex-col gap-8 justify-center'>
							<p className='text-4xl'>Hi, {`I'm Minh Tan`}</p>
							<div className='font-semibold flex flex-col gap-2'>
								<p>
									FRONT <span className='text-4xl'>end</span>{' '}
								</p>
								<p>DEVELOPER</p>
							</div>
							<p className='text-base w-2/3 leading-7 '>
								A passionate Frontend Developer with a keen eye for design and a love for building
								interactive, user-friendly web applications. I specialize in crafting responsive,
								high-performance, and visually appealing websites using modern web technologies.
							</p>
							<div className='size-32 group hover:bg-white/10 transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-2 relative before:absolute before:top-0 before:left-0 before:border-t before:w-full before:h-full before:rounded-t-full after:absolute after:top-0 after:left-0 after:border-b after:w-full after:h-full after:rounded-b-full'>
								<p className='text-lg text-nowrap group-hover:translate-x-4 transition-all duration-500'>
									Scroll to About
								</p>
								<div className='group-hover:translate-x-4 transition-all duration-500'>
									<GrLinkNext className='text-xl' />
								</div>
							</div>
						</div>
						<div className='flex gap-6'>
							<div className='flex justify-center pt-52'>
								<div className='bg-white/10 size-56 relative flex items-center group justify-center backdrop-blur-md cursor-pointer overflow-hidden'>
									<AnimBlock className='face_border' />
									<div className='absolute bottom-0 left-0 size-16 transition-all duration-500 bg-white/70 flex items-end justify-center px-1 py-2 font-medium rounded-se-full -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0'>
										<p className='text-xs'>Cube - #fff</p>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-6'>
								<div className='flex justify-center'>
									<div className='bg-white/10 size-80 relative group overflow-hidden flex items-center justify-center backdrop-blur-md cursor-pointer'>
										<AnimBlock className='face_purple-border' />
										<div className='absolute bottom-0 left-0 size-20 transition-all duration-500 bg-[#b2a5ff]/70 flex items-end justify-center px-1 py-2 font-medium rounded-se-full -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0'>
											<p className='text-base text-white'>Cube - #b2a5ff</p>
										</div>
									</div>
								</div>
								<div className='flex justify-center'>
									<div className='bg-white/10 size-80 flex items-center justify-center backdrop-blur-md cursor-pointer relative group overflow-hidden '>
										<AnimBlock className='face_blue-border' />
										<div className='absolute bottom-0 left-0 size-20 transition-all duration-500 bg-[#a1e3f9]/70 flex items-end justify-center px-1 py-2 font-medium rounded-se-full -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0'>
											<p className='text-base text-white'>Cube - #a1e3f9</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
