import React, { Component } from 'react';

import {
	validateEmail,
	validatePassword,
	validatePhone,
	validateText,
	validateNumber,
} from '../utils/validateFields';

class Form extends Component {
	state = {
		name: '',
		address: '',
		email: '',
		phone: '',
		password1: '',
		password2: '',
		messages: [],
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleText = e => {
		if (validateText(e.target.value)) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	handleNumber = e => {
		if (validateNumber(e.target.value)) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.validateFields() === 0) {
			this.props.history.push({
				pathname: '/details',
				state: { details: this.state },
			});
		}
	};

	validateFields() {
		const { name, address, email, phone, password1, password2 } = this.state;
		let messages = [];
		if (!(name.length > 1)) {
			messages.push('Name Should be atleats 2 characters long');
		}
		if (address.length < 10) {
			messages.push('Address Should be atleats 10 characters long');
		}
		if (!validateEmail(email)) {
			messages.push('Email is invalid');
		}
		if (!validatePhone(phone)) {
			messages.push('Phone number should be 10 digits');
		}
		if (!validatePassword(password1)) {
			messages.push(
				'Password should be of 6-20 characters with at least 1 digit, 1 uppercase and 1 lowercase'
			);
		}
		if (password1 !== password2) {
			messages.push('Confirmed passwords are not matching');
		}
		this.setState({ messages });
		return messages.length;
	}

	render() {
		const {
			name,
			address,
			email,
			phone,
			password1,
			password2,
			messages,
		} = this.state;

		return (
			<div>
				<div className="form-style-10">
					<h1>Sign Up Now!</h1>
					<form>
						<div className="section">
							<span>1</span>Name & Address
						</div>
						<div className="inner-wrap">
							<label>
								Your Full Name{' '}
								<input
									type="text"
									name="name"
									onChange={this.handleText}
									value={name}
								/>
							</label>
							<label>
								Address{' '}
								<textarea
									name="address"
									onChange={this.handleChange}
									value={address}
								></textarea>
							</label>
						</div>

						<div className="section">
							<span>2</span>Email & Phone
						</div>
						<div className="inner-wrap">
							<label>
								Email Address{' '}
								<input
									type="email"
									name="email"
									onChange={this.handleChange}
									value={email}
								/>
							</label>
							<label>
								Phone Number{' '}
								<input
									type="number"
									name="phone"
									onChange={this.handleNumber}
									value={phone}
								/>
							</label>
						</div>

						<div className="section">
							<span>3</span>Passwords
						</div>
						<div className="inner-wrap">
							<label>
								Password{' '}
								<input
									type="password"
									name="password1"
									onChange={this.handleChange}
									value={password1}
								/>
							</label>
							<label>
								Confirm Password{' '}
								<input
									type="password"
									name="password2"
									onChange={this.handleChange}
									value={password2}
								/>
							</label>
						</div>
						<div className="button-section">
							<input
								type="submit"
								name="Sign Up"
								value="Sign Up"
								onClick={this.handleSubmit}
							/>
						</div>
						<ul className="validation-list">
							{messages.length > 0 &&
								messages.map((msg, i) => {
									return (
										<li key={i}>
											<p>{msg}</p>
										</li>
									);
								})}
						</ul>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
