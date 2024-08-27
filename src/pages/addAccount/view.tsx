import ScreenResponsive from '@/components/ui/responsive/screen';
import AddAccountMobile from '@/layout/mobile/addAccount';

function View() {
	return (
		<ScreenResponsive
			mobile={() => <AddAccountMobile />}
			desktop={() => <div>Add Account Desktop</div>}
		/>
	);
}

export default View;
