import { ReactNode } from 'react';

export interface IWrapperProps {
	children: ReactNode;
	className?: string;
}

function Wrapper({ className = '', ...props }: IWrapperProps) {
	return (
		<main className={`min-h-screen ${className}`}>
			<div className='flex w-full'>{props.children}</div>
		</main>
	);
}

export default Wrapper;
