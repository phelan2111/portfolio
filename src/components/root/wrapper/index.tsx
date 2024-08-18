import { ReactNode } from 'react';
import NavigateLeft from '../navigate/left';

export interface IWrapperProps {
	children: ReactNode;
	className?: string;
	extends?: ReactNode;
	isNavigate?: boolean;
}

function Wrapper({ className = '', ...props }: IWrapperProps) {
	return (
		<main
			className={`min-h-screen bg-primary_light text-primary_dark dark:bg-primary_dark dark:text-primary_light ${className}`}>
			<div className='max-w-[1440px] m-auto w-full lg:flex gap-3'>
				{props.isNavigate && <NavigateLeft />}
				{props.children}
			</div>
			<div className='hidden lg:block'>{props.extends}</div>
		</main>
	);
}

export default Wrapper;
