import BottomNavigate from '@/core/navigate/bottom';
import Wrapper from '@/core/wrapper';
import { Outlet } from 'react-router-dom';
import PlaySong from '../play/song';
import AppBar from '@/components/appbar/appBar';

function BasicWrapper() {
	return (
		<Wrapper>
			<AppBar />
			<Outlet />
			<BottomNavigate />
			<PlaySong />
		</Wrapper>
	);
}

export default BasicWrapper;
