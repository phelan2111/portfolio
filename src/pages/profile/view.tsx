import ScreenResponsive from '@/components/ui/responsive/screen';
import ProfileDesktop from '@/layout/desktop/profile';
import HomeMobile from '@/layout/mobile/home';
import { projectsWeb, projectsZalo, projectsPersonal } from './data/project';

export interface IViewProps {}

function View(props: IViewProps) {
	return (
		<ScreenResponsive
			mobile={() => <HomeMobile />}
			desktop={() => (
				<ProfileDesktop
					projectsPersonal={projectsPersonal}
					projectsWeb={projectsWeb}
					projectsZalo={projectsZalo}
					{...props}
				/>
			)}
		/>
	);
}

export default View;
