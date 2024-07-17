import Localize from '@/langs';
import { ReactNode } from 'react';

export interface IItemLinkBottom {
	text: string;
	path: string;
	icon: ReactNode;
	[name: string]: unknown;
}
interface ILinkNavigateBottomProps {
	item: IItemLinkBottom;
	className?: string;
	isActive: boolean;
	onClick: VoidFunction;
}

function LinkNavigateBottom({
	className = '',
	...props
}: ILinkNavigateBottomProps) {
	return (
		<div
			onClick={props.onClick}
			aria-hidden
			className={`flex flex-col group justify-center items-center cursor-pointer gap-1 ${className}`}>
			<div
				className={`text-lg transition-all duration-300 ${
					props.isActive
						? '-translate-y-7'
						: 'translate-y-0 text-primary_dark group-hover:scale-110'
				}`}>
				{props.item.icon}
			</div>
			<p
				className={`text-xs transition-all duration-300 font-medium ${
					props.isActive
						? 'translate-y-0 text-primary_dark'
						: 'translate-y-1 text-primary_light'
				}`}>
				{Localize(props.item.text)}
			</p>
		</div>
	);
}

export default LinkNavigateBottom;
