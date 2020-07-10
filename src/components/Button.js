import React from 'react';

const Button = props => {
	return (
		<button href="#" className="button">
			{props.children}
		</button>
	);
};

export default Button;
