import React from 'react';
import './styles.css';

export interface InputProps {
	/**
	 * What placeholder should it be?
	 */
	placeholder?: string;
	/**
	 * What tailwind class should it be?
	 */
	tailwindClass?: string;
	/**
	 * What type should it be?
	 */
	type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'hidden' | 'search';
}

export const Input: React.FC<InputProps> = ({ placeholder = 'Type something', type = 'text', tailwindClass, ...props }) => {
	return (
		<input type={type} placeholder={placeholder} {...props} className={["outline-none p-2 border border-gray-900 rounded-sm", `${tailwindClass}`].join(' ')} />
	);
};
