interface IAlbumCardProps {
	themeColor: string;
	singersName: string[];
	albumName: string;
	albumImage: string;
}

function AlbumCard(props: IAlbumCardProps) {
	const singersName = props.singersName.join(', ');

	return (
		<div className='h-fit min-w-36 flex flex-col gap-3 snap-end'>
			<div
				style={{
					borderColor: props.themeColor,
				}}
				className='relative border-b-4'>
				<img
					className='h-36 w-36 object-cover'
					src={props.albumImage}
					alt={props.albumImage}
				/>
				<div
					style={{
						borderColor: props.themeColor,
					}}
					className='absolute bottom-2 left-0 border-l-4 pl-4'>
					<p className='font-bold'>{props.albumName}</p>
				</div>
			</div>
			<p className='text-xs'>{singersName} and more</p>
		</div>
	);
}

export default AlbumCard;
