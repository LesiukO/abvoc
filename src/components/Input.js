import React from 'react';

const Input = props => {
	const { onInput, value } = props;

	return <input value={value} onChange={onInput} placeholder="type here..." type="text" className="input" />;
};

export default Input;
