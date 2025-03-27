import React from 'react';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

function Header() {
	return (
		<header className="headerWrapper">
			<span className="headerTitle">TODO</span>
			<ThemeSwitcher />
		</header>
	);
}

export default Header;
