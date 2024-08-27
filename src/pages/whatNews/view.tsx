import ScreenResponsive from '@/components/ui/responsive/screen';
import WhatNewsMobile from '@/layout/mobile/whatNews';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <WhatNewsMobile />}
			desktop={() => <div>WhatNews Desktop</div>}
		/>
	);
}

export default View;
