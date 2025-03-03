import { useState } from 'react';

type useToggleProps = {
	defaultValue?: boolean;
};

const useToggle = ({ defaultValue = false }: useToggleProps) => {
	const [isToggle, setIsToggle] = useState(defaultValue);

	return {
		isToggle,
		onOpen: () => setIsToggle(true),
		onClose: () => setIsToggle(false),
		onToggle: () => setIsToggle((prev) => !prev),
	};
};

export default useToggle;
