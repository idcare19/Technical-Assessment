import { useEffect, useState } from "react";

const navItems = [
	["services", "Services"],
	["products", "Products"],
	["why-choose-us", "Why Choose Us"],
	["faq", "FAQs"],
	["feedbacks", "Feedbacks"],
	["blogs", "Blogs"],
	["contact", "Contact"],
	["map", "Map"],
];

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [theme, setTheme] = useState(() => {
		const savedTheme = window.localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}

		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	function handleThemeToggle() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		window.localStorage.setItem("theme", nextTheme);
	}

	function handleMenuToggle() {
		setIsMenuOpen((prev) => !prev);
	}

	return (
		<header className="site-header" id="top">
			<nav className="site-nav container" aria-label="Primary navigation">
				<a href="#top" className="brand">IDCARE19</a>

				<div className="nav-actions">
					<button
						type="button"
						className="menu-toggle"
						onClick={handleMenuToggle}
						aria-expanded={isMenuOpen}
						aria-controls="main-nav-links"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>
					<button
						type="button"
						className="theme-toggle"
						onClick={handleThemeToggle}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					>
						{theme === "dark" ? "☀️ Light" : "🌙 Dark"}
					</button>
				</div>

				<ul id="main-nav-links" className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
					{navItems.map(([href, label]) => (
						<li key={href}>
							<a href={`#${href}`} onClick={() => setIsMenuOpen(false)}>{label}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
