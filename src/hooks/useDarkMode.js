import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {
	const [someValue, setSomeValue] = useLocalStorage('darkMode', false);

	useEffect(() => {
		let bodyClass = document.querySelector('body');

		someValue ? bodyClass.classList.add('dark-mode') : bodyClass.classList.remove('dark-mode');
		// if(someValue === true) {
		// 	bodyClass.classList.add('dark-mode');
		// } else{
		// 	bodyClass.classList.remove('dark-mode');
		// }
	}, [someValue]);
	return [someValue, setSomeValue]
}
