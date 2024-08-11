import data from '@/layout/desktop/kyc/data/single.json';
import { useId } from 'react';

function ParallaxWrap() {
	const key = useId();

	return (
		<div className='w-screen h-screen absolute top-0 right-0 wrapper-parallax flex flex-col gap-8'>
			{data.map((type) => {
				return (
					<div key={key} className='images-line'>
						{type.map((image) => {
							return (
								<div
									key={key}
									className='line'
									style={{
										backgroundImage: `url(${image})`,
									}}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default ParallaxWrap;
