import { ProjectItem } from '@/pages/profile/types';
import HoverCard from '../anim/hoverCard';
import LoaderTriangle from '../loader/triangle';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Helper } from '@/utils/helper';
import useToggle from '@/hooks/useToggle';
import { IoIosClose } from 'react-icons/io';

type CardProjectProps = {
	data: ProjectItem;
};

const CardProject = (props: CardProjectProps) => {
	const { isToggle, onOpen, onClose } = useToggle({});

	return (
		<div>
			<HoverCard
				onClick={onOpen}
				className='h-fit bg-gradient-to-t from-white/10 backdrop-blur-lg !rounded-xl overflow-hidden w-full'>
				<div className='flex flex-col gap-8 w-full items-center'>
					<LoaderTriangle />
					<div className='px-8 text-white text-start w-full flex flex-col gap-4 relative'>
						<p className='text-xl font-semibold'>{props.data.name}</p>
						<ul className='list-disc list-inside'>
							{props.data.descriptions.map((i) => {
								return (
									<li key={Helper.randomKey()} className='normal-case'>
										{i}
									</li>
								);
							})}
						</ul>
						<div className='w-full flex items-center justify-end py-5 rounded-lg'>
							<p>See more</p>
							<MdOutlineKeyboardArrowRight className='text-xl' />
						</div>
					</div>
				</div>
			</HoverCard>
			<div
				className={`fixed top-0 transition-opacity duration-0 left-0 w-full bg-gradient-to-br from-primary_dark-20 h-full ${
					isToggle ? 'opacity-100 z-10' : 'opacity-0 -z-20'
				}`}>
				<div className='w-full h-full flex flex-col justify-center items-center gap-6'>
					<div className='bg-primary_dark text-white px-8 pt-8 pb-6 rounded-md shadow-current'>
						<div className='flex flex-col justify-center items-center gap-8'>
							<LoaderTriangle />
							<div className='flex flex-col gap-6'>
								<p className='text-4xl font-semibold'>{props.data.name}</p>
								<div>
									<ul className='list-disc list-inside flex flex-col gap-1'>
										{props.data.descriptions.map((i) => {
											return (
												<li key={Helper.randomKey()} className='normal-case'>
													{i}
												</li>
											);
										})}
									</ul>
								</div>
								<div>
									<p className='w-full max-w-96'>{props.data.technology}</p>
								</div>
								{!Helper.isEmpty(props.data.link) && (
									<div className='flex justify-end'>
										<a
											target='_blank'
											href={props.data.link}
											className='underline cursor-pointer'
											rel='noreferrer'>
											link
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
					<div
						aria-hidden
						onClick={onClose}
						className='size-10 flex items-center justify-center hover:scale-105 transition-all duration-500 cursor-pointer hover:text-white'>
						<IoIosClose className='text-4xl' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProject;
