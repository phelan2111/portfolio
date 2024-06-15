interface IVideoProps {
	src: string;
	track: string;
	controls?: boolean;
	id?: string;
	mute?: boolean;
}
function Video(props: IVideoProps) {
	return (
		<video
			id={props.id}
			muted={props.mute}
			autoPlay={false}
			className='h-full w-full object-cover'
			controls={props.controls}>
			<source src={props.src} type='video/mp4' />
			<track src={props.track} kind='captions' />
		</video>
	);
}

export default Video;
