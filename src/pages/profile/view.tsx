import ScreenResponsive from '@/components/ui/responsive/screen';
import ProfileDesktop from '@/layout/desktop/profile';
import HomeMobile from '@/layout/mobile/home';
import { projectsWeb, projectsZalo, projectsPersonal } from './data/project';

interface IViewProps {}

function View(props: IViewProps) {
	console.log('HomeView', props);
	return (
		<ScreenResponsive
			mobile={() => <HomeMobile />}
			desktop={() => (
				<ProfileDesktop
					projectsPersonal={projectsPersonal}
					projectsWeb={projectsWeb}
					projectsZalo={projectsZalo}
				/>
			)}
		/>
	);
}

export default View;
