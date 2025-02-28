import { ReactNode } from 'react';
import LoaderLoudBull from '../loader/loudBull';
import { GoDotFill } from 'react-icons/go';

type ProcessWorkProps = {
	children: ReactNode;
	timeStart: string;
	timeEnd: string;
};

const ProcessWork = (props: ProcessWorkProps) => {
	return (
		<div className='text-white flex gap-14 divide-x min-w-fit'>
			<section className='py-7 relative flex flex-col gap-2 text-nowrap w-60 text-2xl'>
				<p className='italic'>{props.timeStart}</p>
				<GoDotFill />
				<p className='italic'>{props.timeEnd}</p>
				<div className='absolute -right-[85px] top-3 size-14 rounded-full bg-primary_dark flex items-center justify-center border-primary_dark border-4'>
					<LoaderLoudBull />
				</div>
			</section>
			<article className='px-14 py-7'>{props.children}</article>
		</div>
	);
};

export default ProcessWork;
