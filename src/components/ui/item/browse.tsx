interface IIItemBrowseProps {
	image: string;
	title: string;
}

function IItemBrowse(props: IIItemBrowseProps) {
	return (
		<div className='w-full h-40 p-4 rounded-none overflow-hidden relative group'>
			<div className='relative z-10 flex flex-col gap-2'>
				<div className='pr-6 w-fit relative'>
					<p className='text-xl font-bold p-2 rounded-l-2xl truncate'>
						{props.title}
					</p>
					<div className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg w-0 group-hover:w-full transition-all duration-500' />
				</div>
				<div className='flex justify-end'>
					<img
						className='h-20 w-20 object-cover rounded-full shadow-insetBotRight'
						src={props.image}
						alt={props.image}
					/>
				</div>
			</div>
			<div
				style={{
					backgroundImage: `url(${props.image})`,
				}}
				className='absolute top-0 right-0 w-full h-full bg-cover bg-center blur-sm'
			/>
			<div className='absolute top-0 right-12 w-full h-full bg-gradient-to-r from-primary_dark' />
		</div>
	);
}

export default IItemBrowse;
