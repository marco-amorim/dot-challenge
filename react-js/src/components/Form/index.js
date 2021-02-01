import React, { useState } from 'react';
import './styles.css';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const maskPhoneInput = (event) => {
		let phone = event.target.value.replace(/\D/g, '');

		if (phone.length > 0) phone = ['(', phone].join('');

		if (phone.length >= 3)
			phone = [phone.substr(0, 3), ') ', phone.substr(3)].join('');

		if (phone.length >= 9) {
			if (phone.length < 14) {
				phone = [phone.substr(0, 9), '-', phone.substr(9)].join('');
			} else {
				phone = [phone.substr(0, 10), '-', phone.substr(10)].join('');
			}
		}

		event.target.value = phone;
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formValues = { name, email, phone, message };

		const thanks = 'Obrigado pelo desafio! \n \n';

		alert(thanks + JSON.stringify(formValues));
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form__field">
				<label htmlFor="name">*Nome:</label>
				<input
					type="text"
					name="name"
					id="name"
					spellcheck="false"
					placeholder="Informe seu nome"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className="form__inputs__row">
				<div className="form__field">
					<label htmlFor="email">*E-mail:</label>
					<input
						type="email"
						name="email"
						id="email"
						spellcheck="false"
						placeholder="Informe seu e-mail"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form__field">
					<label htmlFor="phone">*Telefone:</label>
					<input
						type="text"
						name="phone"
						id="phone"
						spellcheck="false"
						placeholder="(__) _____-____"
						onInput={maskPhoneInput}
						pattern=".{14,15}"
						maxLength={15}
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
			</div>

			<div className="form__field">
				<label htmlFor="message">*Mensagem:</label>
				<textarea
					type="textbox"
					name="message"
					id="message"
					spellcheck="false"
					placeholder="Escreva aqui"
					required
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>

			<button type="submit">Enviar</button>
		</form>
	);
};

export default Form;
