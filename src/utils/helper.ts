export function isIntoView(el: Element) {
	const rect = el.getBoundingClientRect();
	const innerHeight = window.innerHeight;
	if (rect.bottom <= innerHeight) {
		return true;
	}
	return false;
}
