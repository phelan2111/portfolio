import NewSingerItem from '@/components/ui/item/newSinger';
import data from '../../data/new.json';
function New() {
	return (
		<div className='grid grid-cols-1 divide-y-[0.5px] divide-primary_dark-10 animate-translateBottom_duration_1dot2'>
			{data.map((item) => {
				return <NewSingerItem key={item.image} {...item} />;
			})}
		</div>
	);
}

export default New;
