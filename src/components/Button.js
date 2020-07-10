import React from 'react';

const Button = props => {
	return (
		<button onClick={props.onDelete} className="button">
			{props.children}
		</button>
	);
};

export default Button;
