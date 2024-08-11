import { ReactNode } from 'react';

export interface IWrapperProps {
	children: ReactNode;
	className?: string;
	extends?: ReactNode;
}

function Wrapper({ className = '', ...props }: IWrapperProps) {
	return (
		<main
			className={`min-h-screen bg-primary_light text-primary_dark dark:bg-primary_dark dark:text-primary_light ${className}`}>
			<div className='max-w-[1440px] m-auto w-full'>{props.children}</div>
			<div>{props.extends}</div>
		</main>
	);
}

export default Wrapper;
