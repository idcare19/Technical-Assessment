function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer" id="footer">
			<div className="container footer-grid">
				<div>
					<a href="#top" className="brand">IDCARE19</a>
					<p>© {year} IDCARE19. All rights reserved.</p>
				</div>
				<nav aria-label="Footer quick links">
					<h3>Quick Links</h3>
					<ul>
						<li><a href="#services">Services</a></li>
						<li><a href="#products">Products</a></li>
						<li><a href="#faq">FAQs</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
				<div>
					<h3>Social</h3>
					<ul>
						<li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
						<li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
						<li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
