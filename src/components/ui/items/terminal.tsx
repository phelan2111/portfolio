import Localize from '@/langs';

type ItemTerminalProps = {
	text: string;
	isSelect?: boolean;
	total?: number;
};
const ItemTerminal = (props: ItemTerminalProps) => {
	return (
		<div className='relative text-xs text-white flex items-center justify-center pb-1.5 gap-2'>
			<p className='uppercase'>{Localize(props.text)} </p>
			{props.total && (
				<div className='size-4 bg-[#7D7C7C] flex items-center justify-center rounded-full'>
					<p className='text-xs'>{props.total}</p>
				</div>
			)}
			{props.isSelect && <div className='absolute bottom-0 left-0 w-full h-px bg-[#0D92F4] rounded-r'></div>}
		</div>
	);
};

export default ItemTerminal;
