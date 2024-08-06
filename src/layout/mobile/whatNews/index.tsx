import FilterChip, { IItemFilterChip } from '@/components/ui/filter/chip';
import Localize from '@/langs';
import { IoArrowBackSharp } from 'react-icons/io5';
import New from './components/list/new';
import PlaySong from '@/components/ui/play/song';
import BottomNavigate, { links } from '@/components/root/navigate/bottom';
import { useRedirect } from '@/hooks/useRedirect';
const filter: IItemFilterChip[] = [
	{
		label: 'Music',
		value: 'Music',
	},
	{
		label: 'Podcasts & Show',
		value: 'Podcasts&Show',
		children: [
			{
				label: 'Podcasts & Show',
				value: 'Podcasts&Show',
			},
			{
				label: 'Unplayed',
				value: 'Unplayed',
			},
		],
	},
];

function WhatNewsMobile() {
	const { redirectPrev } = useRedirect();

	return (
		<main className='h-screen w-screen bg-primary_dark-20 text-white overflow-y-auto snap-mandatory snap-y pb-40'>
			<article className='snap-start'>
				<div className='p-4 text-2xl flex gap-4 sticky top-0 bg-primary_dark-10 z-10 animate-translateBottom_duration_0dot8'>
					<IoArrowBackSharp aria-hidden onClick={redirectPrev} />
					<p className='text-lg'>{Localize('WHAT_NEW')}</p>
				</div>
				<div className='px-4 pt-4 animate-translateBottom_duration_0dot8'>
					<h4 className='text-3xl font-bold'>
						{Localize('WHAT_NEW')}
					</h4>
					<p className='text-sm'>
						{Localize('THE_LATEST_RELEASE_FORM_ARTISTS')}
					</p>
				</div>
			</article>
			<article className='p-4 animate-translateBottom_duration_1dot2'>
				<FilterChip data={filter} />
			</article>
			<h2 className='text-md font-bold px-4 animate-translateBottom_duration_1dot2'>
				{Localize('NEW')}
			</h2>
			<New />
			<BottomNavigate defaultPath={links[0]} />
			<PlaySong />
		</main>
	);
}

export default WhatNewsMobile;
