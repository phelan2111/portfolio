import Localize from '@/langs';
import { ReactNode } from 'react';
import { FaRegCirclePlay } from 'react-icons/fa6';

interface IRenderProps {
	item?: {
		[name: string]: unknown;
	};
}
interface IHorizontalItemProps {
	onClick?: VoidFunction;
	extends?: {
		icon?: ReactNode;
		onClick?: VoidFunction;
	};
	render?: (props: IRenderProps) => ReactNode;
	item?: {
		[name: string]: unknown;
	};
	image?: {
		fieldImage?: string;
		className?: string;
	};
	className?: string;
}

function HorizontalItem({
	image = {
		fieldImage: 'image',
		className: 'w-16 h-16 rounded-md',
	},
	className = '',
	...props
}: IHorizontalItemProps) {
	return (
		<div
			aria-hidden
			onClick={props.onClick}
			className={`flex justify-between items-center group ${className}`}>
			<div className='absolute text-xs lowercase delay-500 shadow-podcastsCard group-hover:delay-0 flex-nowrap text-nowrap justify-center items-center overflow-hidden hidden lg:flex top-0 right-0 w-0 h-0 bg-primary_dark group-hover:w-1/3 group-hover:h-2/3 transition-all rounded-es-full duration-700 -z-10'>
				<p className='p-2 pr-4'>
					{props.item?.total as number} {Localize('SONG')}
				</p>
			</div>
			<div className='absolute top-1/3 overflow-hidden right-0 group-hover:delay-500 translate-x-8 group-hover:-translate-x-1 hidden lg:flex group-hover:w-8 group-hover:h-8 transition-all duration-700'>
				<FaRegCirclePlay className='text-3xl' />
			</div>
			<div className='flex items-center gap-4'>
				<img
					className={`object-cover ${image.className}`}
					src={props?.item?.[image.fieldImage as string] as string}
					alt={props?.item?.[image.fieldImage as string] as string}
				/>
				{props.render ? (
					props.render({
						item: props.item,
					})
				) : (
					<p className='text-xs font-bold'>
						{props.item?.name as string}
					</p>
				)}
			</div>
			{props.extends && (
				<div
					aria-hidden
					onClick={props.extends.onClick}
					className='w-8 h-8 flex items-center justify-center'>
					{props.extends.icon}
				</div>
			)}
		</div>
	);
}

export default HorizontalItem;
