import { PATH_REDIRECT } from '@/utils/enums';
import View from './view';
import { IHorizontalAlbumItemProps } from '@/components/item/album/horizontal';
import { useNavigate } from 'react-router-dom';

function Component() {
	const navigate = useNavigate();

	const handleRedirectAlbum = (dataItem: unknown) => {
		const album = dataItem as IHorizontalAlbumItemProps;
		navigate(`${PATH_REDIRECT.ALBUM}/${album.id}`);
	};

	return <View onRedirectAlbum={handleRedirectAlbum} />;
}

export default Component;
