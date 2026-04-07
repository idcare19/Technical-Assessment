import { products } from "../data/products";

function Products() {
	return (
		<section className="section section-alt" id="products" aria-labelledby="products-title">
			<div className="container">
				<h2 id="products-title">Products</h2>
				<p className="section-subtitle">Ready-made solutions to launch faster.</p>

				<div className="product-grid">
					{products.map((product) => (
						<article key={product.id} className="product-card">
							<img
								src={product.image}
								alt={product.name}
								width={product.width}
								height={product.height}
								loading="lazy"
								decoding="async"
							/>
							<div className="product-body">
								<h3>{product.name}</h3>
								<p>{product.description}</p>
								<div className="product-meta">
									<strong>{product.price}</strong>
									<button type="button" className="btn btn-primary">{product.cta}</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Products;
