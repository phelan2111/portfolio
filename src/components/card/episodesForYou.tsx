interface IEpisodesForYouCardProps {
	imageEpisodes: string;
	nameEpisodes: string;
	typeEpisodes: string;
	category: string;
}

function EpisodesForYouCard(props: IEpisodesForYouCardProps) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='relative'>
				<img
					className='w-40 h-40 rounded-lg shadow-bootstrapLarge object-cover'
					src={props.imageEpisodes}
					alt={props.imageEpisodes}
				/>
				<p className='text-[10px] bg-[#98ABEE] w-fit px-2 py-1 rounded-md absolute bottom-2 left-2 font-bold'>
					{props.category}
				</p>
			</div>
			<p className='text-sm w-40 truncate font-bold'>
				{props.nameEpisodes}
			</p>
			<p className='w-40 text-xs'>Knew: {props.typeEpisodes}</p>
		</div>
	);
}

export default EpisodesForYouCard;
