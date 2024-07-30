import Button, { IButtonProps } from '@/components/root/button';
import Localize from '@/langs';
import { ReactNode } from 'react';

interface IButtonIconStartProps extends IButtonProps {
	icon: ReactNode;
	classNameIcon?: string;
}

function ButtonIconStart({
	text = 'COHESIVE_MUSIC',
	classNameIcon = '',
	...props
}: IButtonIconStartProps) {
	return (
		<Button {...props}>
			<div className='relative'>
				<div className={`absolute left-4 text-xl ${classNameIcon}`}>
					{props.icon}
				</div>
				{Localize(text)}
			</div>
		</Button>
	);
}

export default ButtonIconStart;
