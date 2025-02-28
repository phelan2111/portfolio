import LoaderFresh from '@/components/ui/loader/fresh';
import { GrLinkNext } from 'react-icons/gr';

const Skill = () => {
	return (
		<div className='bg-primary_dark w-screen h-screen'>
			<article className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full flex'>
				<div className='py-10 px-10 grid grid-cols-2 w-full gap-y-10'>
					<div className='flex items-start justify-between gap-20'>
						<LoaderFresh />
						<div className='flex flex-col gap-10'>
							<p className='text-3xl font-bold uppercase bg-gradient-to-l from-primary_dark-20 via-transparent py-5 pl-6 pr-10 text-white rounded-r-sm'>
								technology
							</p>
							<div>
								<ul className='list-disc text-white flex flex-col gap-3'>
									<li>
										<p>Web development use React, nextjs, express (Typescript)</p>
									</li>
									<li>
										<p>Performance optimization, code debugging</p>
									</li>
									<li>
										<p>Front-end and Back-end development</p>
									</li>
									<li>
										<p>Restful api</p>
									</li>
									<li>
										<p>Git proficiency</p>
									</li>
									<li>
										<p>JavaScript, HTML and css (BEM)</p>
									</li>
									<li>
										<p>User interface and User experience design</p>
									</li>
									<li>
										<p>Library UI (MUI, React kendo, tailwind .)</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div />
					<div />
					<div className='flex items-end gap-20 justify-between'>
						<div className='flex flex-col gap-10'>
							<p className='text-3xl font-bold uppercase bg-gradient-to-r from-primary_dark-20 via-transparent py-5 pl-6 pr-10 text-white rounded-l-sm'>
								communicate
							</p>
							<div className='px-4'>
								<ul className='list-disc text-white flex flex-col gap-3'>
									<li>
										<p>English</p>
									</li>
								</ul>
							</div>
						</div>
						<LoaderFresh />
					</div>
				</div>
			</article>
			<article className='fixed bottom-[90px] translate-x-[10%] right-[0%]'>
				<div className='flex group items-end bg-gradient-to-r from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 px-5 rounded-l-full'>
					<div className='text-white w-full h-full'>
						<div className='transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<p className='text-sm uppercase text-nowrap tracking-[10px] group-hover:translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>projects</span>
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
								<span className='font-bold text-lg'>works</span>
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Skill;
