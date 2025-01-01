import { ReactNode } from 'react';

type ItemToolProps = {
	icon: ReactNode;
	isSelect?: boolean;
};
const ItemTool = (props: ItemToolProps) => {
	return (
		<div className='size-10 relative text-xl text-white flex items-center justify-center'>
			{props.icon}
			{props.isSelect && (
				<div className='absolute top-0 left-0 w-1 h-full bg-[#0D92F4] rounded-r'></div>
			)}
		</div>
	);
};

export default ItemTool;
