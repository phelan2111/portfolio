import View from './view';

function Model() {

	const handleScrollHome = () => {
		const elementAbout = document.querySelector('#about');
		const elementPersonal = document.querySelector('#personal');
		if (elementAbout && elementPersonal) {
			elementAbout?.classList.remove('-translate-x-full');
			elementPersonal?.classList.add('translate-x-full');
			elementPersonal?.classList.add('translate-x-full');
		}
	};
	const handleScrollWork = () => {
		const elementPersonal = document.querySelector('#personal');
		const elementWork = document.querySelector('#work');
		if (elementWork && elementPersonal) {
			elementPersonal?.classList.remove('-translate-y-full');
			elementPersonal?.classList.add('-translate-y-[200%]');
			elementWork?.classList.add('-translate-y-[200%]');
		}
	};

	return <View onScrollToHome={handleScrollHome} onScrollToWork={handleScrollWork} />;
}

export default Model;
