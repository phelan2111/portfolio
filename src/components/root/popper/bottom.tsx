import { Fragment, ReactNode, useState } from 'react';

interface IPropsRender {
	onClose: VoidFunction;
	onOpen: VoidFunction;
	isOpen: boolean;
}

interface IPopperBottomProps {
	children: ReactNode;
	className?: string;
	render: (props: IPropsRender) => ReactNode;
}

function PopperBottom({ className = 'z-20', ...props }: IPopperBottomProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Fragment>
			<div className='relative'>
				<div aria-hidden onClick={handleOpen}>
					{props.children}
				</div>
			</div>
			{isOpen && (
				<div
					aria-hidden
					onClick={handleClose}
					className={`fixed bg-black/50 w-screen h-screen bottom-0 right-0 ${className}`}
				/>
			)}
			<div
				className={`fixed bg-primary_dark w-screen bottom-0 rounded-t-2xl z-50 right-0 transition-all duration-500
					${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
				{props.render({
					isOpen,
					onClose: handleClose,
					onOpen: handleOpen,
				})}
			</div>
		</Fragment>
	);
}

export default PopperBottom;
