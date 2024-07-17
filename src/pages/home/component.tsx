import { PATH_REDIRECT } from '@/utils/enums';
import View from './view';
import { useNavigate } from 'react-router-dom';
import { IHorizontalAlbumItemProps } from '@/components/ui/item/album/horizontal';

function Component() {
	const navigate = useNavigate();

	const handleRedirectAlbum = (dataItem: unknown) => {
		const album = dataItem as IHorizontalAlbumItemProps;
		navigate(`${PATH_REDIRECT.ALBUM}/${album.id}`);
	};

	return <View onRedirectAlbum={handleRedirectAlbum} />;
}

export default Component;
