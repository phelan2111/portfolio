import CardPersonalProject from '@/components/ui/cards/personalProject';
import CardProject from '@/components/ui/cards/project';
import ZaloProject from '@/components/ui/cards/zaloProject';
import LoaderNicePanda from '@/components/ui/loader/nicePanda';
import { ProjectItem } from '@/pages/profile/types';
import { Helper } from '@/utils/helper';
import { GrLinkNext } from 'react-icons/gr';

type ProjectProps = {
	projectsWeb: ProjectItem[];
	projectsZalo: ProjectItem[];
	projectsPersonal: ProjectItem[];
};

const Project = (props: ProjectProps) => {
	const onScrollToSkill = () => {
		const elementSkill = document.querySelector('#skill');
		const elementProject = document.querySelector('#project');
		if (elementProject && elementSkill) {
			elementSkill?.classList.remove('-translate-y-[400%]');
			elementSkill?.classList.add('-translate-y-[300%]');
			elementProject.classList.remove('-translate-y-[400%]');
			elementProject.classList.add('-translate-y-[300%]');
		}
	};

	return (
		<div
			id='project'
			className='bg-primary_dark w-screen h-screen -translate-y-[300%] transition-transform duration-[2.5s]'>
			<article className='max-w-[1440px] w-full m-auto gap-10 h-full flex overflow-y-scroll scrollHiddenY'>
				<div className='px-2'>
					<div className='py-20 w-full flex flex-col gap-20'>
						<section className='h-fit flex flex-col gap-10'>
							<div className='flex items-center gap-8'>
								<LoaderNicePanda />
								<p className='text-white text-2xl font-semibold italic uppercase'>Project Web</p>
							</div>
							<div className='grid grid-cols-4 w-full gap-10 px-14'>
								{props.projectsWeb.map((i) => (
									<CardProject data={i} key={Helper.randomKey()} />
								))}
							</div>
						</section>
						<section className='h-fit flex flex-col gap-10'>
							<div className='flex items-center gap-8'>
								<LoaderNicePanda />
								<p className='text-white text-2xl font-semibold italic uppercase'>
									Project Zalo Mini App
								</p>
							</div>
							<div className='grid grid-cols-4 w-full gap-10 px-14'>
								{props.projectsZalo.map((i) => (
									<ZaloProject data={i} key={Helper.randomKey()} />
								))}
							</div>
						</section>
						<section className='h-fit flex flex-col gap-10'>
							<div className='flex items-center gap-8'>
								<LoaderNicePanda />
								<p className='text-white text-2xl font-semibold italic uppercase'>Personal project</p>
							</div>
							<div className='grid grid-cols-4 w-full gap-10 px-14'>
								{props.projectsPersonal.map((i) => (
									<CardPersonalProject data={i} key={Helper.randomKey()} />
								))}
							</div>
						</section>
					</div>
				</div>
			</article>
			<article className='fixed top-20 left-0'>
				<div
					aria-hidden
					onClick={onScrollToSkill}
					className='flex group items-end bg-gradient-to-l from-primary_dark-20 transition-all duration-700 cursor-pointer w-fit rotate-90 py-8 pr-7 pl-4 rounded-r-full'>
					<div className='text-white w-full h-full'>
						<div className=' transition-all duration-500 cursor-pointer rounded-full pl-4 flex items-center gap-6 relative'>
							<div className='group-hover:-translate-x-3 transition-all rotate-180 duration-500'>
								<GrLinkNext className='text-xl' />
							</div>
							<p className='text-sm uppercase text-nowrap leading-10 tracking-[10px] group-hover:-translate-x-2 transition-all duration-500 italic'>
								<span className='font-bold text-lg'>skills</span>
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Project;
