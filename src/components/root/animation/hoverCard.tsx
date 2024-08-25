import { ReactNode, useCallback, useEffect, useRef } from 'react';

interface IHoverCardProps {
	children: ReactNode;
	className?: string;
}
function HoverCard(props: IHoverCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const refLight = useRef<HTMLDivElement>(null);
	const handleRotateToMouse = useCallback((event: MouseEvent) => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;
		const rect = ref.current?.getBoundingClientRect();
		let leftX = 0;
		let topY = 0;
		let center = {
			x: 0,
			y: 0,
		};
		let distance = 0;
		if (rect) {
			leftX = mouseX - rect.x;
			topY = mouseY - rect.y;
			center = {
				x: leftX - rect.width / 2,
				y: topY - rect.height / 2,
			};
			distance = Math.sqrt(center.x ** 2 + center.y ** 2);
			const card = ref.current;
			const light = refLight.current;
			if (card && light) {
				card.style.transform = `scale3d(1.07, 1.07, 1.07)
                rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                 0,
                ${Math.log(distance) * 2}deg
                )`;
				light.style.backgroundImage = `radial-gradient(
                    circle at
                    ${center.x * 2 + rect.width / 2}px
                    ${center.y * 2 + rect.height / 2}px,
                    #ffffff55,
                    #0000000f
                )`;
			}
		}
	}, []);

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('mouseenter', () => {
				ref.current?.addEventListener('mousemove', handleRotateToMouse);
			});
			ref.current.addEventListener('mouseleave', () => {
				if (ref.current && refLight.current) {
					document.removeEventListener(
						'mousemove',
						handleRotateToMouse,
					);
					ref.current.style.transform = '';
					ref.current.style.background = '';
					refLight.current.style.backgroundImage = '';
				}
			});
		}
		return () => {};
	}, [handleRotateToMouse, ref, refLight]);

	return (
		<div
			ref={ref}
			style={{
				transform: 'rotate3d(0)',
			}}
			className={`transition-all duration-500 relative hover:duration-150 ${props.className}`}>
			<div
				ref={refLight}
				className='absolute transition-all duration-500 w-full h-full top-0 left-0'
			/>
			{props.children}
		</div>
	);
}

export default HoverCard;
