import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const total = testimonials.length;

	useEffect(() => {
		if (total <= 1) {
			return undefined;
		}

		const timer = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % total);
		}, 3500);

		return () => window.clearInterval(timer);
	}, [total]);

	function goNext() {
		setActiveIndex((prev) => (prev + 1) % total);
	}

	function goPrev() {
		setActiveIndex((prev) => (prev - 1 + total) % total);
	}

	return (
		<section className="section section-alt" id="feedbacks" aria-labelledby="feedback-title">
			<div className="container">
				<div className="testimonial-header">
					<h2 id="feedback-title">Client Feedbacks</h2>
					<div className="carousel-controls" aria-label="Testimonial controls">
						<button type="button" className="carousel-btn" onClick={goPrev} aria-label="Previous testimonial">
							‹
						</button>
						<button type="button" className="carousel-btn" onClick={goNext} aria-label="Next testimonial">
							›
						</button>
					</div>
				</div>

				<div className="testimonial-carousel" role="region" aria-live="polite" aria-label="Testimonials carousel">
					<div
						className="testimonial-track"
						style={{ transform: `translateX(-${activeIndex * 100}%)` }}
					>
						{testimonials.map((item) => (
							<blockquote className="card testimonial testimonial-slide" key={item.id}>
								<p>“{item.quote}”</p>
								<footer>
									<strong>{item.name}</strong>
									<span>{item.role}</span>
								</footer>
							</blockquote>
						))}
					</div>
				</div>

				<div className="carousel-dots" aria-label="Testimonial pagination">
					{testimonials.map((item, index) => (
						<button
							key={item.id}
							type="button"
							className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
							onClick={() => setActiveIndex(index)}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
