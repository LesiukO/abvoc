import React from 'react';

const Button = props => {
	return (
		<button onClick={props.onClick} className={`button ` + (props.big ? 'button--big' : '')}>
			{props.children}
		</button>
	);
};

export default Button;
