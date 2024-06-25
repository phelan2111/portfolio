import { Fragment, ReactNode, useState } from 'react';

interface IPropsRender {
	onClose: VoidFunction;
	onOpen: VoidFunction;
	isOpen: boolean;
}

interface IPopperBottomProps {
	children: ReactNode;
	render: (props: IPropsRender) => ReactNode;
}

function PopperBottom(props: IPopperBottomProps) {
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
					className='fixed bg-black/50 w-screen h-screen bottom-0 z-20 right-0'
				/>
			)}
			<div
				className={`fixed bg-primary_dark w-screen bottom-0 rounded-t-2xl z-50 right-0 transition-all duration-500
					${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
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
