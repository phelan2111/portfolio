import data from '../../data/favourites.json';

function FavouritesList() {
	return (
		<section className='flex flex-none overflow-x-auto gap-3 scrollHiddenX snap-x snap-mandatory snap-start'>
			{data.map((i) => (
				<div key={i.id} className='snap-end'>
					<img
						className='min-w-20 h-20 object-cover rounded-lg shadow-bootstrapLarge'
						src={i.image}
						alt={i.image}
					/>
				</div>
			))}
		</section>
	);
}

export default FavouritesList;
