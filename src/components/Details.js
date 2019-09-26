import React from 'react';

function Details(props) {
	const {
		name,
		address,
		email,
		phone,
		password1,
  } = props.location.state.details;
  
	const goBack = () => {
		props.history.push('/');
  };
  
	return (
		<div className="form-style-10 details-box">
			<div className="button-section">
				<button onClick={goBack}>Back</button>
			</div>
			<div className="details">
				<h2 className="details-title">Details</h2>
				<ul className="details-list">
					<li className="item">
						<p>
							<span className="section">Name:</span>
							<span> {name}</span>
						</p>
					</li>
					<li className="item">
						<p>
							<span className="section">Address: </span>
							<span>{address}</span>
						</p>
					</li>
					<li className="item">
						<p>
							<span className="section">Email: </span>
							<span> {email}</span>
						</p>
					</li>
					<li className="item">
						<p>
							<span className="section">Phone: </span>
							<span> {phone}</span>
						</p>
					</li>
					<li className="item">
						<p>
							<span className="section">Password: </span>
							<span> {password1}</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Details;
