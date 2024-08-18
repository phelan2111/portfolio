import { ReactNode } from 'react';

interface IAnimationScaleProps {
	className?: string;
	children: ReactNode;
}
function AnimationScale({
	className = 'hover:scale-105',
	...props
}: IAnimationScaleProps) {
	return (
		<div
			className={`scale-100 transition-transform duration-500 ${className}`}>
			{props.children}
		</div>
	);
}

export default AnimationScale;
