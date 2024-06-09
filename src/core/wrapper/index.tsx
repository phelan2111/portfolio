import { ReactNode } from 'react';

export interface IWrapperProps {
	children: ReactNode;
	className?: string;
}

function Wrapper({ className = '', ...props }: IWrapperProps) {
	return (
		<main
			className={`min-h-screen dark bg-primary_light text-primary_dark dark:bg-primary_dark dark:text-primary_light ${className}`}>
			{props.children}
		</main>
	);
}

export default Wrapper;
