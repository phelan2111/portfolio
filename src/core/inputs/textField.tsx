import Localize from '@/langs';
import { HTMLInputTypeAttribute, ReactNode } from 'react';

export interface ITextFieldProps {
	label?: string;
	className?: string;
	name?: string;
	type?: HTMLInputTypeAttribute;
	icon?: {
		direction: 'start' | 'end';
		node: ReactNode;
	};
}

function TextField({
	className = '',
	name = '',
	type = 'text',
	...props
}: ITextFieldProps) {
	const isIconStart = props.icon?.direction === 'start';
	const isIconEnd = props.icon?.direction === 'end';

	return (
		<div className='flex flex-col gap-0.5'>
			{props.label && <p className='text-sm'>{Localize(props.label)}</p>}
			<div className='relative flex h-fit bg-white items-center gap-1 hover:shadow-white transition-all duration-500 focus-within:shadow-white px-2 rounded-sm'>
				{isIconStart && props.icon && props.icon.node}
				<input
					type={type}
					name={name}
					className={`w-full outline-none h-11 text-primary_dark text-base ${className}`}
				/>
				{isIconEnd && props.icon && props.icon.node}
			</div>
			{/* <p className='text-xs text-red-300 px-2 py-0.5 rounded-3xl italic text-end'>
				error
			</p> */}
		</div>
	);
}

export default TextField;
