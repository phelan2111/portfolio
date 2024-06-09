import Localize from '@/langs';

export interface ITabsProps<T> {
	tabs: IItemTab<T>[];
	tab: IItemTab<T>;
	className?: string;
	classNameItem?: string;
	classNameActive?: string;
}
export interface IItemTab<T> {
	text: string;
	value: T;
}
function Tabs({
	className = '',
	classNameItem = '',
	classNameActive = '',
	...props
}: ITabsProps<unknown>) {
	return (
		<div className={`flex gap-2 ${className}`}>
			{props.tabs.map((tab) => {
				const isSelected = tab.value === props.tab.value;
				const classActive = isSelected
					? `bg-primary_light text-primary_dark hover:bg-primary_light/80 ${classNameActive}`
					: `hover:bg-primary_light/10 ${classNameItem}`;
				return (
					<div
						className={`px-4 py-1 rounded-3xl transition-colors duration-500 cursor-pointer ${classActive}`}
						key={Tabs.name + tab.text}>
						{Localize(tab.text)}
					</div>
				);
			})}
		</div>
	);
}

export default Tabs;
