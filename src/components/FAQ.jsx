import { faq } from "../data/faq";

function FAQ() {
	return (
		<section className="section" id="faq" aria-labelledby="faq-title">
			<div className="container faq-wrap">
				<h2 id="faq-title">Frequently Asked Questions</h2>
				{faq.map((item) => (
					<details key={item.id} className="faq-item">
						<summary>{item.question}</summary>
						<p>{item.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
}

export default FAQ;
