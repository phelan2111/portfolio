import { handleStyleViewTool } from '@/layout/desktop/search';
import { FaRegPlayCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface IItemRecentSearchesProps {
	image: string;
	name: string;
	byAuthor: string;
	onDelete: VoidFunction;
}
function ItemRecentSearches(props: IItemRecentSearchesProps) {
	return (
		<div className='p-4 flex group flex-col gap-4 relative'>
			<div
				aria-hidden
				onClick={props.onDelete}
				className='w-8 h-8 bg-primary_dark-20 z-10 rounded-full flex justify-center items-center hover:scale-110 cursor-pointer absolute right-2 top-2'>
				<IoMdClose />
			</div>
			<div className='relative'>
				<div className='hidden lg:flex absolute overflow-hidden justify-center items-center transition-all duration-500 bottom-2 right-2 w-0 h-0 bg-primary_dark-10 shadow-bootstrapLarge rounded-full group-hover:w-12 group-hover:h-12'>
					<FaRegPlayCircle className='text-3xl' />
				</div>
				<img
					className={`transition-all m-auto duration-500 object-cover rounded-full shadow-bootstrapLarge ${
						handleStyleViewTool().classNameItem
					}`}
					src={props.image}
					alt={props.image}
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<p className='text-xl font-semibold'>{props.name}</p>
				<p className='text-sm'>{props.byAuthor}</p>
			</div>
		</div>
	);
}

export default ItemRecentSearches;
