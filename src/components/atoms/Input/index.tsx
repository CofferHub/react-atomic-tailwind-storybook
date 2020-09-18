import React from 'react';
import './styles.css';

export interface InputProps {
	/**
	 * What placeholder should it be?
	 */
	placeholder?: string;
	/**
	 * What type should it be?
	 */
	type?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder = 'Type something', type = 'text', ...props }) => {
	return (
		<input type={type} placeholder={placeholder} {...props} className="outline-none p-2 border border-gray-900 rounded-sm" />
	);
};
