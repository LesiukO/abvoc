import React from 'react';

const Input = props => {
	const { onInput, value, focus } = props;

	return <input autoFocus={focus} value={value} onChange={onInput} placeholder="type here..." type="text" className="input" />;
};

export default Input;
