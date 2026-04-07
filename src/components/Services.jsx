import { services } from "../data/services";

function Services() {
	return (
		<section className="section" id="services" aria-labelledby="services-title">
			<div className="container">
				<h2 id="services-title">Services</h2>
				<p className="section-subtitle">What we do best for growing brands.</p>
				<div className="card-grid">
					{services.map((service) => (
						<article className="card" key={service.id}>
							<span className="card-icon" aria-hidden="true">{service.icon}</span>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
