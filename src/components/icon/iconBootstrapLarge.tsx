import { ReactNode } from 'react';

interface IIconBootstrapLargeProps {
	children: ReactNode;
	onClick?: VoidFunction;
}

function IconBootstrapLarge(props: IIconBootstrapLargeProps) {
	return (
		<div
			aria-hidden
			onClick={props.onClick}
			className='shadow-bootstrapLarge rounded-full w-8 h-8 flex items-center justify-center'>
			{props.children}
		</div>
	);
}

export default IconBootstrapLarge;
