function Hero() {
	return (
		<section className="hero-section" id="hero" aria-labelledby="hero-title">
			<div className="container hero-grid">
				<div className="hero-copy">
					<p className="eyebrow">Performance-First Web Solutions</p>
					<h1 id="hero-title">Build lightning-fast websites that convert.</h1>
					<p>
						We create modern single-page experiences with clean architecture,
						technical SEO, and outstanding Core Web Vitals.
					</p>
					<div className="hero-actions">
						<a href="#contact" className="btn btn-primary">Start Your Project</a>
						<a href="#products" className="btn btn-outline">View Products</a>
					</div>
				</div>

				<img
					src="public/hero.webp"
					alt="Team collaborating on website design"
					width="800"
					height="520"
					className="hero-image"
					fetchPriority="high"
					decoding="async"
				/>
			</div>
		</section>
	);
}

export default Hero;
