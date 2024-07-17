import BottomNavigate from '@/components/root/navigate/bottom';
import Wrapper from '@/components/root/wrapper';
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
