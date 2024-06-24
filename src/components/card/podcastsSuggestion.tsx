import { GoPlusCircle } from 'react-icons/go';
import { LuDot } from 'react-icons/lu';
import WaveLoader from '../loader/wave';
import { CiVolumeMute } from 'react-icons/ci';
import Localize from '@/langs';
import { SlOptionsVertical } from 'react-icons/sl';
import { FaPlayCircle } from 'react-icons/fa';
export interface IItemPodcastSuggest {
	name: string;
	title: string;
	image: string;
	createAt: string;
	lastComment: string;
}

interface IPodcastsSuggestionCardProps {
	onOptions: VoidFunction;
	item: IItemPodcastSuggest;
}
function PodcastsSuggestionCard(props: IPodcastsSuggestionCardProps) {
	return (
		<article className='relative'>
			<div className='bg-white/10 backdrop-blur-md p-4 rounded-md shadow-podcastsCard snap-start'>
				<div className='flex justify-between items-center gap-4 text-primary_light'>
					<h4 className='text-lg font-bold leading-6'>
						{props.item.name}
					</h4>
					<GoPlusCircle className='text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer' />
				</div>
				<p className='flex gap-1 text-xs items-end'>
					Episode <LuDot />
					{props.item.title}
				</p>
				<div className='flex flex-col gap-4 items-center justify-center relative py-4'>
					<img
						className='w-40 h-40 rounded-md object-cover relative z-10'
						src={props.item.image}
						alt={props.item.image}
					/>
					<div className='absolute'>
						<WaveLoader />
					</div>
				</div>
				<p className='flex gap-1 text-xs items-end pb-4 font-semibold'>
					{props.item.createAt} <LuDot />{' '}
					<span className='text-white/50'>
						{props.item.lastComment}
					</span>
				</p>
				<div className='flex justify-between items-center'>
					<div className='bg-primary_dark/70 cursor-pointer relative z-10 rounded-3xl font-semibold flex px-3 py-2 hover:bg-primary_dark/90 transition-colors duration-300 items-center gap-2'>
						<CiVolumeMute className='text-lg' />
						<p className='text-xs'>{Localize('PREVIEW_ALBUM')}</p>
					</div>
					<div className='flex items-center gap-4'>
						<SlOptionsVertical
							onClick={props.onOptions}
							className='text-lg'
						/>
						<FaPlayCircle className='text-3xl relative z-10' />
					</div>
				</div>
			</div>
		</article>
	);
}

export default PodcastsSuggestionCard;
