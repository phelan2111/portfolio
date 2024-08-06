import Localize from '@/langs';
import data from './data/search.json';
import PopperSetting from '@/components/ui/popper/setting';
import InputSearch from '@/components/ui/input/search';
import HorizontalItem from '@/components/ui/item/horizontal';
import { IoCloseOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';

function SearchMobile() {
	return (
		<div className='p-4 md:hidden flex flex-col gap-4'>
			<header className='flex gap-3 items-center animate-translateBottom_duration_0dot8'>
				<PopperSetting />
				<h6 className='text-lg font-semibold'>{Localize('SEARCH')}</h6>
			</header>
			<InputSearch
				render={() => {
					return (
						<div className='p-4 flex flex-col gap-4 animate-translateLeft_duration_2dot3s'>
							<h4 className='text-lg'>
								{Localize('RECENT_SEARCHES')}
							</h4>
							<div className='flex flex-col gap-3'>
								{data.map((i) => {
									return (
										<HorizontalItem
											extends={{
												icon: (
													<IoCloseOutline className='text-xl' />
												),
												onClick: () => {},
											}}
											key={i.image}
											item={i}
											render={() => {
												return (
													<div className='flex flex-col gap-1'>
														<h6 className='text-base'>
															{i.name}
														</h6>
														<p className='flex items-center text-xs text-white/60'>
															{Localize('SONG')}{' '}
															<LuDot />{' '}
															{i.singerName}
														</p>
													</div>
												);
											}}
										/>
									);
								})}
							</div>
							<div className='m-auto shadow-bootstrapLarge rounded-2xl px-6 py-3 text-sm select-none hover:shadow-podcastsCard transition-shadow duration-500'>
								{Localize('CLEAR_RECENT_SEARCHES')}
							</div>
						</div>
					);
				}}
			/>
		</div>
	);
}

export default SearchMobile;
