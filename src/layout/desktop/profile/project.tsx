import HoverCard from '@/components/root/animation/hoverCard';
import LoaderNicePanda from '@/components/ui/loader/nicePanda';
import LoaderTriangle from '@/components/ui/loader/triangle';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Project = () => {
	return (
		<div className='bg-primary_dark w-screen h-screen'>
			<article className='max-w-[1440px] w-full m-auto gap-10 py-20 h-full flex'>
				<div className='py-20 w-full'>
					<section className='h-fit flex flex-col gap-10'>
						<div className='flex items-center gap-8'>
							<LoaderNicePanda />
							<p className='text-white text-2xl font-semibold italic uppercase'>Project involved</p>
						</div>
						<div className='grid grid-cols-4 w-full gap-10'>
							<HoverCard className='h-fit bg-gradient-to-t from-white/10 backdrop-blur-lg !rounded-xl overflow-hidden w-full'>
								<div className='flex flex-col gap-8 w-full items-center'>
									<LoaderTriangle />
									<div className='px-8 text-white text-start w-full flex flex-col gap-4 relative'>
										<p className='text-xl font-semibold'>Gold Blood</p>
										<ul className='list-disc list-inside'>
											<li className='normal-case'>Community project</li>
											<li className='normal-case'>
												Participate in bug fixing and new feature development
											</li>
										</ul>
										<div className='w-full flex items-center justify-end py-5 rounded-lg'>
											<p>See more</p>
											<MdOutlineKeyboardArrowRight className='text-xl' />
										</div>
									</div>
								</div>
							</HoverCard>
						</div>
					</section>
				</div>
			</article>
		</div>
	);
};

export default Project;
