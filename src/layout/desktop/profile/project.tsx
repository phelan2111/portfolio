import CardPersonalProject from '@/components/ui/cards/personalProject';
import CardProject from '@/components/ui/cards/project';
import ZaloProject from '@/components/ui/cards/zaloProject';
import LoaderNicePanda from '@/components/ui/loader/nicePanda';
import { ProjectItem } from '@/pages/profile/types';
import { Helper } from '@/utils/helper';

type ProjectProps = {
	projectsWeb: ProjectItem[];
	projectsZalo: ProjectItem[];
	projectsPersonal: ProjectItem[];
};

const Project = (props: ProjectProps) => {
	return (
		<div className='bg-primary_dark w-screen h-screen'>
			<article className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full flex overflow-y-scroll scrollHiddenY'>
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
		</div>
	);
};

export default Project;
