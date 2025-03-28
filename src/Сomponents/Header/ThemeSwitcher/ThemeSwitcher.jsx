import React from 'react';
import { useEffect, useState } from 'react';
import sunIcon from './../../../assets/img/icon-sun.svg';
import moonIcon from './../../../assets/img/icon-moon.svg';

function ThemeSwitcher() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	//change theme and save to localStorage
	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<>
			<img
				className="theme-button"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				src={theme === 'dark' ? sunIcon : moonIcon}
			/>
		</>
	);
}

export default ThemeSwitcher;
