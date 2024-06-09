import { isIntoView } from '@/utils/helper';
import { ReactNode, useEffect, useRef } from 'react';

interface IAnimationScrollProps {
	children: ReactNode;
	animation: string;
}

function AnimationScroll(props: IAnimationScrollProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const element = ref.current;
			if (element) {
				if (isIntoView(ref.current)) {
					element.classList.add(props.animation);
				}
			}
		});
	}, [props.animation]);

	return <div ref={ref}>{props.children}</div>;
}

export default AnimationScroll;
