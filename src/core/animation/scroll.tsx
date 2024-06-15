import { isIntoView } from '@/utils/helper';
import { Fragment, ReactNode, useEffect } from 'react';

interface IAnimationScrollProps {
	children: ReactNode;
	animation?: string;
	id: string;
	onScroll?: (isIntoView: boolean) => void;
}

function AnimationScroll(props: IAnimationScrollProps) {
	useEffect(() => {
		const element = document.querySelector(`#${props.id}`);
		window.addEventListener('scroll', () => {
			if (element) {
				if (props.animation) {
					if (isIntoView(element)) {
						element.classList.add(props.animation);
					} else {
						element.classList.remove(props.animation);
					}
				}
				if (props.onScroll) {
					props.onScroll(isIntoView(element));
				}
			}
		});
	}, [props]);

	return <Fragment>{props.children}</Fragment>;
}

export default AnimationScroll;
