/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchWP from '../utils/fetchWP';

export default function ContactForm({ wpObject }) {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		question: '',
		more: ''
	});
	const [error, setError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [focus, setFocus] = useState({});
	const [hover, setHover] = useState(false);

	const fetcher = new fetchWP({
		restURL: wpObject.api_url,
		restNonce: wpObject.api_nonce
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleFocus = (e) => setFocus({ ...focus, [e.target.name]: true });
	const handleBlur = (e) => setFocus({ ...focus, [e.target.name]: false });

	const handleSubmit = (event) => {
		event.preventDefault();
		const name = `${form.firstName} ${form.lastName}`.trim();
		const message = form.question;
		fetcher
			.post('submission', {
				name,
				email: form.email,
				message,
				more: form.more
			})
			.then(
				(json) => {
					setSubmitted(true);
					setError(false);
					// eslint-disable-next-line no-console
					console.log(`New Contact Submission: ${json.value}`);
				},
				(err) => setError(err.message)
			);
	};
		const formStyle = {
			display: 'flex',
			flexDirection: 'column'
		};

	const fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
	const inputStyle = {
		width: '100%',
		padding: '1.1rem',
		marginTop: '0.25rem',
		marginBottom: '1.25rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		fontSize: '1.25rem',
		background: '#222',
		color: '#fff',
		outline: 'none',
		transition: 'border-color 0.2s',
		fontFamily,
		textTransform: 'lowercase',
	};
	const inputFocusStyle = {
			borderColor: '#5b9dd9',
			boxShadow: '0 0 0 2px #5b9dd9',
		};
	const labelStyle = {
		fontWeight: 600,
		marginBottom: '0.25rem',
		fontSize: '1.18rem',
		fontFamily,
		textTransform: 'lowercase',
	};
	const buttonStyle = {
		marginTop: '1rem',
		width: '170px',
		padding: '1.1rem',
		background: '#5b9dd9',
		color: '#222',
		border: 'none',
		borderRadius: '4px',
		fontWeight: 700,
		fontSize: '1.25rem',
		cursor: 'pointer',
		transition: 'background 0.2s',
		fontFamily,
		textTransform: 'lowercase',
	};
	const buttonHoverStyle = {
			background: '#357ab8',
		};
	const errorStyle = {
		color: '#ff4d4f',
		marginTop: '0.5rem',
		fontWeight: 600,
		fontSize: '1.18rem',
		fontFamily,
		textTransform: 'lowercase',
	};
	const contactForm = submitted ? (
		<p role="status" tabIndex="0" style={{ color: '#5b9dd9', fontWeight: 700, fontSize: '1.2rem' }}>Thanks for getting in touch!</p>
	) : (
		<form onSubmit={handleSubmit} style={formStyle} aria-label="Contact form" autoComplete="on" noValidate>
			<fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
				<legend className="screen-reader-text">Contact form</legend>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						flexDirection: 'row',
						flexWrap: 'wrap',
						marginBottom: '1rem',
					}}
				>
					<div style={{ flex: '1 1 200px', minWidth: '0' }}>
						<label htmlFor="firstName" style={labelStyle}>First name:</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="Enter your first name"
							value={form.firstName}
							onChange={handleInputChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							style={focus.firstName ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
							autoComplete="given-name"
							aria-required="true"
							required
						/>
					</div>
					<div style={{ flex: '1 1 200px', minWidth: '0' }}>
						<label htmlFor="lastName" style={labelStyle}>Last name:</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Enter your last name"
							value={form.lastName}
							onChange={handleInputChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							style={focus.lastName ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
							autoComplete="family-name"
							aria-required="true"
							required
						/>
					</div>
				</div>
				<label htmlFor="email" style={labelStyle}>
					Email: <span aria-hidden="true" style={{ color: 'red' }}>*</span>
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email address"
					required
					aria-required="true"
					aria-describedby="email-required"
					value={form.email}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={focus.email ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
					autoComplete="email"
				/>
				<span id="email-required" className="screen-reader-text">Required</span>
				<label htmlFor="question" style={labelStyle}>
					Question: <span aria-hidden="true" style={{ color: 'red' }}>*</span>
				</label>
				<input
					type="text"
					name="question"
					id="question"
					placeholder="What would you like to ask?"
					required
					aria-required="true"
					aria-describedby="question-required"
					value={form.question}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={focus.question ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
				/>
				<span id="question-required" className="screen-reader-text">Required</span>
				<label htmlFor="more" style={labelStyle}>
					Tell me something more:
				</label>
				<textarea
					name="more"
					id="more"
					placeholder="Add any additional details here..."
					value={form.more}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={focus.more ? { ...inputStyle, ...inputFocusStyle, minHeight: '100px' } : { ...inputStyle, minHeight: '100px' }}
					aria-multiline="true"
					rows={4}
				/>
				<button
					className="button button-primary"
					type="submit"
					style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
					aria-label="Submit contact form"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					SUBMIT
				</button>
			</fieldset>
			<style>{`
				@media (max-width: 600px) {
					form[aria-label="Contact form"] fieldset > div {
						flex-direction: column !important;
						gap: 0 !important;
					}
				}
			`}</style>
		</form>
	);

	const errorMsg = error ? <p className="error" style={errorStyle} role="alert">{error}</p> : '';

	return (
		<div style={{ fontFamily, fontSize: '1.22rem', textTransform: 'lowercase' }}>
			{contactForm}
			{errorMsg}
		</div>
	);
}

ContactForm.propTypes = {
	wpObject: PropTypes.object
};
