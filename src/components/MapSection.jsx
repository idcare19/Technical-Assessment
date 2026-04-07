function MapSection() {
	return (
		<section className="section" id="map" aria-labelledby="map-title">
			<div className="container">
				<h2 id="map-title">Find Us</h2>
				<div className="map-shell">
					<iframe
						title="Google map location"
						src="https://www.google.com/maps?q=Rudrapur&output=embed"
						width="600"
						height="350"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	);
}

export default MapSection;
