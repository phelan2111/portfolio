import { ReactNode, useState } from 'react';

export interface IRenderPopperBottomRightProps {
	onOpen: VoidFunction;
	onClose: VoidFunction;
	isOpen: boolean;
}

interface IPopperBottomRightProps {
	children?: ReactNode;
	isOpen?: boolean;
	className?: string;
	renderMainContent: (props: IRenderPopperBottomRightProps) => ReactNode;
	renderPopper?: (props: IRenderPopperBottomRightProps) => ReactNode;
}

function PopperBottomRight({
	className = 'z-20',
	...props
}: IPopperBottomRightProps) {
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
				className={`fixed bottom-0 h-screen bg-primary_dark-20 left-0 transition-all duration-500 ${
					isOpenPopup
						? 'translate-y-0 w-screen rounded-none opacity-100'
						: 'translate-y-full w-10 opacity-0 rounded-se-3xl'
				}  ${className}`}>
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

export default PopperBottomRight;
