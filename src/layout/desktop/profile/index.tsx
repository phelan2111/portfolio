import Headers from '@/components/ui/common/headers/normal';
import Project from './project';
import { ProjectItem } from '@/pages/profile/types';
// import About from './about';
// import Personal from './personal';
// import Skill from './skill';
// import Work from './work';

type ProfileDesktopProps = {
	projectsWeb: ProjectItem[];
	projectsZalo: ProjectItem[];
	projectsPersonal: ProjectItem[];
};

const ProfileDesktop = (props: ProfileDesktopProps) => {
	return (
		<div className='w-screen h-screen relative'>
			<Headers />
			{/* <About /> */}
			{/* <Personal /> */}
			{/* <Work /> */}
			{/* <Skill /> */}
			<Project
				projectsZalo={props.projectsZalo}
				projectsWeb={props.projectsWeb}
				projectsPersonal={props.projectsPersonal}
			/>
		</div>
	);
};

export default ProfileDesktop;
