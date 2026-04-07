const points = [
	"Performance-first development workflow",
	"Mobile-first, accessibility-aware UI",
	"Clean architecture with maintainable components",
	"Technical SEO and structured data included",
];

function WhyChooseUs() {
	return (
		<section className="section" id="why-choose-us" aria-labelledby="why-title">
			<div className="container">
				<h2 id="why-title">Why Choose Us</h2>
				<p className="section-subtitle">Built for quality, speed, and long-term growth.</p>
				<ul className="usp-list">
					{points.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default WhyChooseUs;
