import { ReactNode } from 'react';

interface IPopperSearchProps {
	children: ReactNode;
	isOpen: boolean;
	onClose: VoidFunction;
}

function PopperSearch(props: IPopperSearchProps) {
	return (
		<div
			className={`fixed bottom-0  h-screen bg-primary_dark-20 left-0 z-50 transition-all duration-500 ${
				props.isOpen
					? 'translate-y-0 w-screen rounded-none'
					: 'translate-y-full w-10 rounded-se-3xl'
			}`}>
			{props.children}
		</div>
	);
}

export default PopperSearch;
