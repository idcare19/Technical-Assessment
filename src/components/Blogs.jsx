import { blogs } from "../data/blogs";

function Blogs() {
	return (
		<section className="section" id="blogs" aria-labelledby="blogs-title">
			<div className="container">
				<h2 id="blogs-title">Latest Blogs</h2>
				<div className="product-grid">
					{blogs.map((blog) => (
						<article className="product-card" key={blog.id}>
							<img
								src={blog.image}
								alt={blog.title}
								width={blog.width}
								height={blog.height}
								loading="lazy"
								decoding="async"
							/>
							<div className="product-body">
								<h3>{blog.title}</h3>
								<p>{blog.excerpt}</p>
								<small>{blog.datePublished}</small>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Blogs;
