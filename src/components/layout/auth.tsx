import { ReactNode } from 'react';

interface IAuthLayoutProps {
	children: ReactNode;
}

function AuthLayout(props: IAuthLayoutProps) {
	return (
		<main className='min-h-screen dark bg-primary_light text-primary_dark dark:bg-primary_dark flex justify-center items-center dark:text-primary_light'>
			{props.children}
		</main>
	);
}

export default AuthLayout;
