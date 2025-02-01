type AnimBlockProps = {
	className?: string;
};

const AnimBlock = ({ className = '' }: AnimBlockProps) => {
	return (
		<div className='loader_block'>
			<div className='cube'>
				<div className={`face ${className}`}></div>
				<div className={`face ${className}`}></div>
				<div className={`face ${className}`}></div>
				<div className={`face ${className}`}></div>
				<div className={`face ${className}`}></div>
				<div className={`face ${className}`}></div>
			</div>
		</div>
	);
};

export default AnimBlock;
