import { Fragment, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
export interface IItemFilterChip {
	label: string;
	value: unknown;
	children?: IItemFilterChip[];
}
interface IFilterChipProps {
	data: IItemFilterChip[];
	onChange?: (dataItem: IItemFilterChip[]) => void;
}
function FilterChip(props: IFilterChipProps) {
	const [dataSelect, setDataSelect] = useState<IItemFilterChip[]>([]);
	const [indexCurrentTarget, setIndexCurrentTarget] = useState<number>(-1);
	const handleSelectParent = (dataItem: IItemFilterChip) => {
		const isItemExist = dataSelect[0]?.value === dataItem.value;
		if (isItemExist) {
			setDataSelect([]);
		} else {
			setDataSelect([dataItem]);
		}
	};
	const handleClear = () => {
		setDataSelect([]);
	};
	const handleSelectChild = (dataItem: IItemFilterChip) => {
		const isItemExist = dataSelect[1]?.value === dataItem.value;
		const data = [...dataSelect];
		if (isItemExist) {
			data.pop();
		} else {
			data.push(dataItem);
		}
		setDataSelect(data);
	};

	useEffect(() => {
		props.onChange && props.onChange(dataSelect);
	}, [dataSelect, props]);

	return (
		<div className='relative w-full overflow-hidden'>
			<div
				className={`flex gap-2 transition-opacity duration-500 ${
					dataSelect.length === 0 ? 'opacity-100' : 'opacity-0'
				}`}>
				{props.data.map((item, index) => {
					return (
						<div key={`${item.value}`} className={`relative`}>
							<div
								aria-hidden
								onClick={() => {
									handleSelectParent(item);
									setIndexCurrentTarget(index);
								}}
								className='px-4 py-1 bg-primary_light/30 cursor-pointer rounded-2xl'>
								<span className='text-xs'>{item.label}</span>
							</div>
						</div>
					);
				})}
			</div>
			<div
				className={`absolute top-0 transition-transform duration-500 w-full ${
					dataSelect.length > 0
						? 'translate-x-0'
						: '-translate-x-full'
				}`}>
				<div className='flex flex-nowrap items-center gap-2'>
					<div
						aria-hidden
						onClick={handleClear}
						className='w-6 h-6 flex items-center justify-center rounded-full bg-primary_light/50'>
						<IoCloseOutline />
					</div>
					{props.data[indexCurrentTarget]?.children ? (
						props.data[indexCurrentTarget].children?.map(
							(child, index) => {
								const isSelect = dataSelect.find(
									(item) => item.value === child.value,
								);
								const isFirst = index === 0;
								if (dataSelect.length === 2 && !isSelect) {
									return <Fragment key={`${child?.value}`} />;
								}
								return (
									<div
										aria-hidden
										onClick={() => {
											handleSelectChild(child);
										}}
										key={`${child.value}`}
										className={`px-4 py-1 transition-all duration-300 rounded-2xl ${
											isSelect
												? isFirst
													? 'bg-green-600 text-primary_dark font-semibold z-10 pointer-events-none'
													: 'bg-green-500 text-primary_dark font-semibold -translate-x-10 pl-10'
												: 'bg-primary_light/30'
										}`}>
										<span className='text-xs text-nowrap'>
											{child?.label}
										</span>
									</div>
								);
							},
						)
					) : (
						<div
							className={`px-4 py-1 transition-all duration-300 rounded-2xl bg-green-600 text-primary_dark font-semibold z-10 pointer-events-none`}>
							<span className='text-xs text-nowrap'>
								{props.data[indexCurrentTarget]?.label}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default FilterChip;
