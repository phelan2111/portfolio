import { Fragment, ReactNode } from 'react';

interface IBackDropPopperProps {
	children: ReactNode;
	isOpen: boolean;
	onClose: VoidFunction;
}

function BackDropPopper(props: IBackDropPopperProps) {
	return (
		<Fragment>
			{props.isOpen && (
				<div
					aria-hidden
					onClick={props.onClose}
					className='fixed bg-black/50 w-screen h-screen bottom-0 z-20 right-0'
				/>
			)}
			<div
				className={`fixed bg-primary_dark w-screen bottom-0 rounded-t-2xl z-50 right-0 transition-all duration-500
			${props.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
				{props.children}
			</div>
		</Fragment>
	);
}

export default BackDropPopper;
