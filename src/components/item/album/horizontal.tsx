import { PATH_REDIRECT } from '@/utils/enums';
import { useNavigate } from 'react-router-dom';

export interface IHorizontalAlbumItemProps {
	cover: string;
	nameAlbum: string;
	id: string;
}

function HorizontalAlbumItem(props: IHorizontalAlbumItemProps) {
	const navigate = useNavigate();

	const handleRedirectAlbum = () => {
		navigate(`${PATH_REDIRECT.ALBUM}/${props.id}`);
	};
	return (
		<div
			aria-hidden
			onClick={() => {
				handleRedirectAlbum();
			}}
			className='flex items-center gap-3 rounded-md overflow-hidden bg-primary_dark-10 hover:opacity-80 cursor-pointer transition-all duration-300 shadow-materialDesign'>
			<img
				className='w-12 h-12 object-cover'
				src={props.cover}
				alt={props.cover}
			/>
			<p className='text-xs font-bold'>{props.nameAlbum}</p>
		</div>
	);
}

export default HorizontalAlbumItem;
