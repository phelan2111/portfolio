import BottomNavigate from '@/core/navigate/bottom';
import Wrapper from '@/core/wrapper';
import { Outlet } from 'react-router-dom';
import PlaySong from '../play/song';

function BasicWrapper() {
	return (
		<Wrapper>
			<Outlet />
			<BottomNavigate />
			<PlaySong />
		</Wrapper>
	);
}

export default BasicWrapper;
