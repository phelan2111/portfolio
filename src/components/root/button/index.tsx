import Localize from '@/langs';
import { ReactNode } from 'react';

export interface IButtonProps {
	children?: ReactNode;
	text?: string;
	className?: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: VoidFunction;
}

function Button({ className = '', type = 'button', ...props }: IButtonProps) {
	return (
		<button
			onClick={props.onClick}
			type={type}
			className={`bg-primary_light w-full hover:bg-primary_light/80 dark:bg-primary_dark dark:hover:bg-primary_dark/80 transition-all duration-300 h-11 active:shadow-white rounded-sm text-base ${className}`}>
			{props.text ? Localize(props.text) : props.children}
		</button>
	);
}

export default Button;
