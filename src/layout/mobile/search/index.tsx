import Localize from '@/langs';
import data from './data/search.json';
import PopperSetting from '@/components/ui/popper/setting';
import InputSearch from '@/components/ui/input/search';
import HorizontalSearchItem from '@/components/ui/item/search/horizontal';

function SearchMobile() {
	return (
		<div className='p-4 flex flex-col gap-4'>
			<header className='flex gap-3 items-center'>
				<PopperSetting />
				<h6 className='text-lg font-semibold'>{Localize('SEARCH')}</h6>
			</header>
			<article>
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
											<HorizontalSearchItem
												key={i.image}
												item={i}
												onDelete={() => {}}
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
			</article>
		</div>
	);
}

export default SearchMobile;
