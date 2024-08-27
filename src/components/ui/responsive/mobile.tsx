import { ReactNode } from 'react';

interface IResponsiveMobileProps {
	children: ReactNode;
}
function ResponsiveMobile(props: IResponsiveMobileProps) {
	return (
		<div className='block lg:hidden w-full h-full'>{props.children}</div>
	);
}

export default ResponsiveMobile;
