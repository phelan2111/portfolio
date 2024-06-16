function GradientCard() {
	return (
		<div className='shadow-bootstrapLarge relative rounded-xl flex flex-col gap-2 p-1'>
			<div className='bg-primary_dark relative z-10 p-4 rounded-xl'>
				<img
					className='h-52 w-52 rounded-xl relative z-10'
					src='https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg'
					alt='https://i.pinimg.com/564x/e8/5e/bf/e85ebf981f08428d11b1cbd54e44357b.jpg'
				/>
				<div className='pt-2'>
					<p className='font-semibold'>Seraphine Mix</p>
					<p className='text-[10px]'>K/DA, Jung Kook and ENHYPEN</p>
				</div>
			</div>
		</div>
	);
}

export default GradientCard;
