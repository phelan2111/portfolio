import { ReactNode } from 'react';

interface IResponsiveDesktopProps {
	children: ReactNode;
}
function ResponsiveDesktop(props: IResponsiveDesktopProps) {
	return (
		<main className='hidden lg:block w-full h-full'>{props.children}</main>
	);
}

export default ResponsiveDesktop;
