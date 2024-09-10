import dayjs from 'dayjs';

export function isIntoView(el: Element) {
	const rect = el.getBoundingClientRect();
	const innerHeight = window.innerHeight;
	if (rect.bottom <= innerHeight) {
		return true;
	}
	return false;
}

export function isYesterday(millisecond: number) {
	const isYesterday = dayjs()
		.add(-1, 'day')
		.isSame(dayjs(millisecond), 'day');

	return isYesterday;
}

export function isToday(millisecond: number) {
	const isToday = dayjs().isSame(dayjs(millisecond), 'day');

	return isToday;
}

export class Helper {
	static formatNumber(number: number) {
		const numberConvert = new Intl.NumberFormat('en-IN', {
			maximumSignificantDigits: 10,
		}).format(number);

		return numberConvert;
	}
}
