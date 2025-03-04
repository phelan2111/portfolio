import ProcessWork from '@/components/ui/process/work';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';

function Work() {
	const onScrollToAbout = () => {
		const elementPersonal = document.querySelector('#personal');
		const elementWork = document.querySelector('#work');
		if (elementWork && elementPersonal) {
			elementPersonal?.classList.add('-translate-y-full');
			elementPersonal?.classList.remove('-translate-y-[200%]');
			elementWork?.classList.remove('-translate-y-[200%]');
			elementWork?.classList.add('-translate-y-full');
		}
	};
	const onScrollToSkill = () => {
		const elementSkill = document.querySelector('#skill');
		const elementWork = document.querySelector('#work');
		if (elementWork && elementSkill) {
			elementWork?.classList.remove('-translate-y-[200%]');
			elementWork?.classList.add('-translate-y-[300%]');
			elementSkill.classList.remove('-translate-y-[200%]');
			elementSkill.classList.add('-translate-y-[300%]');
		}
	};

	return (
		<div id='work' className='bg-primary_dark w-screen h-screen -translate-y-full transition-all duration-[2.5s]'>
			<article className='max-w-[1440px] w-full m-auto gap-10 h-full'>
				<div className='py-20 flex flex-col gap-20'>
					<ProcessWork timeEnd='The current' timeStart='July, 2022'>
						<div className='flex flex-col gap-10'>
							<div className='flex flex-col gap-4'>
								<p className='text-2xl font-bold'>Web developer</p>
								<div className='flex flex-col gap-2'>
									<p className='text-4xl font-bold flex gap-3 items-center'>
										South Telecom (Intelin branch)
									</p>
									<p className='text-base font-light flex items-center gap-2'>
										<FaMapMarkerAlt />
										335/3 Dien Bien Phu Street
									</p>
								</div>
							</div>
							<ul className='list-disc flex flex-col gap-3'>
								<li>
									<p>
										Developed a <span className='font-bold'>RESTful API</span> that integrated with
										a third-party service, allowing for seamless data synchronization and improved
										performancejs and <span className='font-bold'>Redux</span> that improved user
										satisfaction{' '}
									</p>
								</li>
								<li>
									<p>
										<span className='font-bold'>RESTful API</span> that integrated with a
										third-party service, allowing for seamless data synchronization and improved
										performance
									</p>
								</li>
								<li>
									<p>
										Designed and implemented a web application that was compatible with multiple
										browsers and devices with minimal errors
									</p>
								</li>
								<li>
									<p>
										Professional in creating animation with{' '}
										<span className='font-bold'>CSS (BEM)</span>, using many{' '}
										<span className='font-bold'>UI libraries</span> such as{' '}
										<span className='font-bold'>tailwind, Mui, React kendo ...</span>
									</p>
								</li>
								<li>
									<p>
										Get exposure to professional projects that are trusted by many people such as{' '}
										<span className='font-bold underline'>
											<a href='https://giotmauvang.org.vn/'>giotmauvang (ReactJS)</a>
										</span>
										,{' '}
										<span className='font-bold underline'>
											<a href='https://web360.evnhcmc.vn/'>evnhcmc (Nextjs)</a>
										</span>
										, <span className='font-bold'>kingSmart (Zalo mini app)</span>,{' '}
										<span className='font-bold'>Viettel Post (Zalo mini app), </span>
										<span className='font-bold'>
											Company Web (Nestjs and EJS) and some outsourcing projects on e-commerce
										</span>
									</p>
								</li>
								<li>
									<p>
										Under tireless dedication was recognized as{' '}
										<span className='font-bold'>employee of the year (2024)</span>
									</p>
								</li>
							</ul>
						</div>
					</ProcessWork>
				</div>
			</article>
			<article className='fixed bottom-[90px] translate-x-[20%] right-[0%]'>
				<div
					aria-hidden
					onClick={onScrollToSkill}
					className='flex group items-end bg-gradient-to-r from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 px-5 rounded-l-full'>
					<div className='text-white w-full h-full'>
						<div className='transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<p className='text-sm uppercase text-nowrap tracking-[10px] group-hover:translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>skills</span>
							</p>
							<div className='group-hover:translate-x-3 transition-all duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
						</div>
					</div>
				</div>
			</article>
			<article className='fixed top-20 left-0'>
				<div
					aria-hidden
					onClick={onScrollToAbout}
					className='flex group items-end bg-gradient-to-l from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 pr-7 pl-4 rounded-r-full'>
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
