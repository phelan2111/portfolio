import { ReactNode, useState } from 'react';
export interface IRenderPopperTopLeftProps {
	onOpen: VoidFunction;
	onClose: VoidFunction;
	isOpen: boolean;
}

interface IPopperTopLeftProps {
	children?: ReactNode;
	isOpen?: boolean;
	renderMainContent: (props: IRenderPopperTopLeftProps) => ReactNode;
	renderPopper?: (props: IRenderPopperTopLeftProps) => ReactNode;
	className?: string;
}

function PopperTopLeft({ className = 'z-50', ...props }: IPopperTopLeftProps) {
	const [isOpenPopup, setIsOpenPopup] = useState<boolean>(
		props.isOpen ?? false,
	);

	const handleClose = () => {
		setIsOpenPopup(false);
	};
	const handleOpen = () => {
		setIsOpenPopup(true);
	};
	return (
		<div>
			{props.renderMainContent({
				isOpen: isOpenPopup,
				onClose: handleClose,
				onOpen: handleOpen,
			})}
			<div
				className={`fixed top-0 h-screen bg-primary_dark-20 left-0 transition-all duration-500 ${
					isOpenPopup
						? 'translate-y-0 w-screen rounded-none opacity-100'
						: '-translate-y-full w-10 opacity-0 rounded-se-3xl'
				} ${className}`}>
				{props.renderPopper
					? props.renderPopper({
							isOpen: isOpenPopup,
							onClose: handleClose,
							onOpen: handleOpen,
					  })
					: props.children}
			</div>
		</div>
	);
}

export default PopperTopLeft;
