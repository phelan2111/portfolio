import Project from './project';
import { ProjectItem } from '@/pages/profile/types';
import About from './about';
import Personal from './personal';
import { IViewProps } from '@/pages/profile/view';
import Skill from './skill';
import Work from './work';

interface ProfileDesktopProps extends IViewProps {
	projectsWeb: ProjectItem[];
	projectsZalo: ProjectItem[];
	projectsPersonal: ProjectItem[];
}

const ProfileDesktop = (props: ProfileDesktopProps) => {
	console.log('props', props);
	return (
		<div className='relative'>
			<About />
			<Personal />
			<Work />
			<Skill />
			<Project
				projectsZalo={props.projectsZalo}
				projectsWeb={props.projectsWeb}
				projectsPersonal={props.projectsPersonal}
			/>
		</div>
	);
};

export default ProfileDesktop;
