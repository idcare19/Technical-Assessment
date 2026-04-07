import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		setErrorMessage("");
		setSubmitted(false);

		if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
			setErrorMessage("EmailJS is not configured yet. Add your EmailJS keys in .env file.");
			return;
		}

		setIsSending(true);

		try {
			const formData = new FormData(form);
			const name = String(formData.get("name") || "").trim();
			const email = String(formData.get("email") || "").trim();
			const message = String(formData.get("message") || "").trim();

			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					name,
					email,
					message,
					from_name: name,
					from_email: email,
					reply_to: email,
					source: "idcare19-website",
				},
				EMAILJS_PUBLIC_KEY
			);

			setSubmitted(true);
			form.reset();
		} catch (error) {
			const fallback = "Failed to send message. Please try again in a moment.";
			const details = typeof error === "object" && error !== null
				? String(error.text || error.message || "")
				: "";

			const normalized = details.toLowerCase();
			if (normalized.includes("origin") || normalized.includes("domain")) {
				setErrorMessage(`EmailJS blocked this domain. Add http://localhost:5173 and http://localhost:5174 in EmailJS allowed origins. (${details})`);
			} else if (normalized.includes("public key") || normalized.includes("user id")) {
				setErrorMessage(`EmailJS public key is invalid. Check VITE_EMAILJS_PUBLIC_KEY in .env. (${details})`);
			} else if (normalized.includes("template") || normalized.includes("service")) {
				setErrorMessage(`EmailJS service/template is invalid or inactive. Re-check IDs in .env and dashboard. (${details})`);
			} else {
				setErrorMessage(details || fallback);
			}
		} finally {
			setIsSending(false);
		}
	}

	return (
		<section className="section section-alt" id="contact" aria-labelledby="contact-title">
			<div className="container contact-wrap">
				<div>
					<h2 id="contact-title">Contact Us</h2>
					<p>Tell us about your project and we’ll reach out with a tailored plan.</p>
					<p className="contact-note">
						This form is connected with EmailJS. Configure template variables to match the field names.
					</p>
				</div>
				<form
					className="contact-form"
					onSubmit={handleSubmit}
					noValidate
				>
					<label htmlFor="contact-name">
						Name
						<input id="contact-name" type="text" name="name" required minLength={2} autoComplete="name" />
					</label>
					<label htmlFor="contact-email">
						Email
						<input id="contact-email" type="email" name="email" required autoComplete="email" />
					</label>
					<label htmlFor="contact-message">
						Message
						<textarea id="contact-message" name="message" rows="4" required minLength={10} />
					</label>
					<input type="hidden" name="source" value="idcare19-website" />
					<button type="submit" className="btn btn-primary" disabled={isSending}>
						{isSending ? "Sending..." : "Send Message"}
					</button>
					{errorMessage && <p className="error-msg" role="alert">{errorMessage}</p>}
					{submitted && !errorMessage && <p className="success-msg" role="status">Thanks! Your inquiry has been submitted.</p>}
				</form>
			</div>
		</section>
	);
}

export default Contact;
