import React from 'react';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

function Header() {
	return (
		<header className="headerWrapper">
			<h1 className="headerTitle">TODO</h1>
			<ThemeSwitcher />
		</header>
	);
}

export default Header;
