export interface IHorizontalAlbumItemProps {
	cover: string;
	nameAlbum: string;
	id: string;
	onClick: VoidFunction;
}

function HorizontalAlbumItem(props: IHorizontalAlbumItemProps) {
	return (
		<div
			aria-hidden
			onClick={props.onClick}
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
