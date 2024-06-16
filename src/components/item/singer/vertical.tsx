interface IVerticalSingerProps {
	avatarSinger: string;
	nameSinger: string;
}

function VerticalSinger(props: IVerticalSingerProps) {
	return (
		<div className='w-fit flex flex-col gap-1 snap-end'>
			<div className='shadow-bootstrapLarge rounded-full p-1'>
				<img
					className='min-w-40 h-40 object-cover rounded-full'
					src={props.avatarSinger}
					alt={props.avatarSinger}
				/>
			</div>
			<p className='text-sm text-center'>{props.nameSinger}</p>
		</div>
	);
}

export default VerticalSinger;
