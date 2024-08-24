import { ReactNode } from 'react';
import NavigateLeft from '../navigate/left';
import Header from '@/components/ui/common/header';

export interface IWrapperProps {
	children: ReactNode;
	className?: string;
	extends?: ReactNode;
	isNavigate?: boolean;
	isHeader?: boolean;
}

function Wrapper({ className = '', ...props }: IWrapperProps) {
	return (
		<main
			className={`min-h-screen bg-primary_light text-primary_dark dark:bg-primary_dark dark:text-primary_light ${className}`}>
			<div className='max-w-[1920px] m-auto w-full lg:flex lg:p-6 lg:gap-6'>
				{props.isNavigate && <NavigateLeft />}
				<div className='w-full lg:flex lg:gap-6 lg:flex-col'>
					{props.isHeader && <Header />}
					<div
						className={`${
							props.isHeader
								? 'lg:h-desktopWrapper lg:overflow-auto scrollHiddenY pr-3'
								: ''
						}`}>
						{props.children}
					</div>
				</div>
			</div>
			<div className='hidden lg:block'>{props.extends}</div>
		</main>
	);
}

export default Wrapper;
