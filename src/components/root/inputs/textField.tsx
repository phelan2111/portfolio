import Localize from '@/langs';
import { HTMLInputTypeAttribute, ReactNode, useState } from 'react';

export interface ITextFieldProps
	extends Omit<
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		'onChange' | 'autoFocus'
	> {
	label?: string;
	classNameInput?: string;
	placeholder?: string;
	className?: string;
	name?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: (valueInput: string) => void;
	icon?: {
		direction: 'start' | 'end';
		node: ReactNode;
	};
	autoFocus?: boolean;
}

function TextField({
	classNameInput = '',
	className = '',
	name = '',
	type = 'text',
	...props
}: ITextFieldProps) {
	const [value, setValue] = useState<string>(props.defaultValue ?? '');

	const isIconStart = props.icon?.direction === 'start';
	const isIconEnd = props.icon?.direction === 'end';

	const handleChange = (valueInput: string) => {
		setValue(valueInput);
	};
	return (
		<div className='flex flex-col gap-0.5'>
			{props.label && <p className='text-sm'>{Localize(props.label)}</p>}
			<div
				className={`relative flex h-fit bg-white items-center gap-1 hover:shadow-white transition-all duration-500 focus-within:shadow-white px-2 rounded-sm ${className}`}>
				{isIconStart && props.icon && props.icon.node}
				<input
					value={value}
					type={type}
					name={name}
					placeholder={props.placeholder}
					className={`w-full outline-none bg-transparent h-11 text-primary_dark text-base ${classNameInput}`}
					{...props}
					onChange={(e) => {
						handleChange(e.currentTarget.value);
						props.onChange && props.onChange(e.currentTarget.value);
					}}
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
