import Localize from '@/langs';

interface IBestOfArtistItemProps {
	nameSingle: string;
	description: string;
	image: string;
}

function BestOfArtistItem(props: IBestOfArtistItemProps) {
	return (
		<div className='flex flex-col gap-2'>
			<div className='h-40 w-40 bg-primary_light'>
				<div className='h-16 text-primary_dark text-center flex flex-col justify-center items-center'>
					<p className='text-xs'>{Localize('THIS_IS')}</p>
					<h4 className='text-base font-bold'>{props.nameSingle}</h4>
				</div>
				<img
					className='w-full h-24 object-cover object-top'
					src={props.image}
					alt={props.image}
				/>
			</div>
			<p className='w-40 text-xs line-clamp-2 '>{props.description}</p>
		</div>
	);
}

export default BestOfArtistItem;
