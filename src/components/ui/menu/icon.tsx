import Localize from '@/langs';
import { ReactNode } from 'react';

export interface IItemIcon {
	text: string;
	icon: ReactNode;
	onClick: VoidFunction;
}
interface IMenuIconProps {
	singer?: {
		image: string;
		saves: number;
		name: string;
	};
	items: IItemIcon[];
	onClose: VoidFunction;
}

function MenuIcon(props: IMenuIconProps) {
	return (
		<div>
			{props.singer && (
				<div className='flex gap-3 p-4 border-b border-px border-primary_dark-20'>
					<img
						className='w-16 h-16 object-cover rounded-lg'
						src={props.singer.image}
						alt={props.singer.image}
					/>
					<div className='flex flex-col gap-0.5 justify-center'>
						<h4 className='text-md font-semibold'>
							{props.singer.name}
						</h4>
						<p className='text-xs text-white/75'>
							{props.singer.saves} {Localize('SAVES')}
						</p>
					</div>
				</div>
			)}
			<ul className='text-sm p-4'>
				{props.items.map((i) => {
					return (
						<li
							aria-hidden
							onClick={() => {
								i.onClick();
								props.onClose();
							}}
							key={i.text}
							className='flex items-center p-3 gap-4 transition-all duration-300 hover:shadow-insetAllSide rounded-xl'>
							<div className='text-2xl'>{i.icon}</div>
							<p>{Localize(i.text)}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MenuIcon;
