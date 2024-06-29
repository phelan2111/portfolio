import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

interface IRankSongProps {
	rank: number;
	no: number;
}

function iConRack(rank: IRankSongProps['rank']) {
	switch (rank) {
		case 0: {
			return <GoDotFill className='text-cyan-400' />;
		}
		case 1: {
			return <FaCaretUp className='text-emerald-400' />;
		}
		default: {
			return <FaCaretDown className='text-rose-500' />;
		}
	}
}
function RankSong(props: IRankSongProps) {
	return (
		<div className='place-content-center place-items-center text-center'>
			<p>{props.no}</p>
			{iConRack(props.rank)}
		</div>
	);
}

export default RankSong;
