import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};


// import { useState } from 'react';
// export const useLocalStorage = keyValue => {
//   const [localStorageValue] = useState(keyValue);
  
//   const testLocalStorage = () => {
//     if (localStorage.getItem(localStorageValue)) {
//       return true;
//     }
//     return false;
//   };
//   const getLocalStorage = () => JSON.parse(
//     localStorage.getItem(localStorageValue));
//   const setLocalStorage = value => localStorage.setItem(localStorageValue,
//     JSON.stringify(value));
//   const removeLocalStorage = () => localStorage.removeItem(localStorageValue);
//   return {
//     testLocalStorage,
//     getLocalStorage,
//     setLocalStorage,
//     removeLocalStorage,
//   };
// };