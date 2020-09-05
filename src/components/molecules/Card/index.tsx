import React from 'react';
import './style.css';

export interface CardProps {
	rootClassName?: 'string',
	children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({rootClassName, children, ...props}) => {

	return (
		<div
			className={[`border border-solid border-gray-400 p-4 rounded shadow-sm `, rootClassName].join(' ')}
			{...props}
		>
			{children}
		</div>
	);
};
