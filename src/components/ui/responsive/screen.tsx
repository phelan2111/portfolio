import { Fragment, ReactNode } from 'react';
import ResponsiveDesktop from './desktop';
import ResponsiveMobile from './mobile';

interface IScreenResponsiveProps {
	desktop: () => ReactNode;
	mobile: () => ReactNode;
}
function ScreenResponsive(props: IScreenResponsiveProps) {
	return (
		<Fragment>
			{<ResponsiveDesktop>{props.desktop()}</ResponsiveDesktop>}
			{<ResponsiveMobile>{props.mobile()}</ResponsiveMobile>}
		</Fragment>
	);
}

export default ScreenResponsive;
