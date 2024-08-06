import { Outlet } from 'react-router-dom';

function ThemeColor() {
	return (
		<div className='dark'>
			<Outlet />
		</div>
	);
}

export default ThemeColor;
