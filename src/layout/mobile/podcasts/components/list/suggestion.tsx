import PodcastsSuggestionCard from '@/components/card/podcastsSuggestion';
import MenuIcon, { IItemIcon } from '@/components/menu/icon';
import BackDropPopper from '@/core/popper/backDrop';
import data from '../../data/suggestion.json';
import { useState } from 'react';
import {
	BsBroadcast,
	BsCloudDownloadFill,
	BsFillFileCodeFill,
	BsFillPlusCircleFill,
	BsFillXOctagonFill,
	BsShareFill,
} from 'react-icons/bs';
import { FaUserAstronaut } from 'react-icons/fa';

const itemsMenu: IItemIcon[] = [
	{
		icon: <BsFillPlusCircleFill />,
		text: 'ADD_TO_YOUR_LIBRARY',
		onClick: () => {},
	},
	{
		icon: <BsCloudDownloadFill />,
		text: 'DOWNLOAD',
		onClick: () => {},
	},
	{
		icon: <BsFillXOctagonFill />,
		text: 'NOT_INTERESTED',
		onClick: () => {},
	},
	{
		icon: <BsFillPlusCircleFill />,
		text: 'ADD_TO_PLAYLIST',
		onClick: () => {},
	},
	{
		icon: <FaUserAstronaut />,
		text: 'VIEW_ARTISTS',
		onClick: () => {},
	},
	{
		icon: <BsShareFill />,
		text: 'SHARE',
		onClick: () => {},
	},
	{
		icon: <BsBroadcast />,
		text: 'GO_TO_ALBUM_RADIO',
		onClick: () => {},
	},
	{
		icon: <BsFillFileCodeFill />,
		text: 'SHOW_CODE',
		onClick: () => {},
	},
];

function Suggestion() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<div className='flex flex-col gap-4'>
				{data.map((i) => {
					return (
						<PodcastsSuggestionCard
							item={i}
							key={i.image}
							onOptions={handleOpen}
						/>
					);
				})}
			</div>

			<BackDropPopper isOpen={isOpen} onClose={handleClose}>
				<MenuIcon onClose={handleOpen} items={itemsMenu} />
			</BackDropPopper>
		</div>
	);
}

export default Suggestion;
