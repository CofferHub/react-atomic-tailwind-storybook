import React from "react";
import './style.css'

export interface CardProps {
	backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({...props}) => {
	return (
		<div>
			<p 
			className="font-bold text-6xl to-blue-500"
			{...props}
			> oi world</p>
		</div>
	);
};
