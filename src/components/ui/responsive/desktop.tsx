import { ReactNode } from 'react';

interface IResponsiveDesktopProps {
	children: ReactNode;
}
function ResponsiveDesktop(props: IResponsiveDesktopProps) {
	return <div className='hidden lg:block w-full h-full'>{props.children}</div>;
}

export default ResponsiveDesktop;
