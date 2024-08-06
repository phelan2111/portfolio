import { ReactNode } from 'react';

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
			className={`flex justify-between items-center ${className}`}>
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
