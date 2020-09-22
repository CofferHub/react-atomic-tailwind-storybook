import React from "react";
import "./style.css";

export interface CheckboxProps {
	rootClassName?: "string";
	name?: "string";
	checked?: "boolean";
	value?: "string";
	props?: 'any',
	disabled?: 'boolean'
}

export const Checkbox: React.FC<CheckboxProps> = ({
	rootClassName,
	name,
	checked,
	value,
	disabled,
	...props
}) => {
	return (
		<span 
		className={` bg-white border rounded border-gray-400 w-4 h-4 
		flex flex-shrink-0 justify-center items-center mr-2 
		focus-within:border-blue-500
		
		`}
		>
			<input
				className={`
					opacity-0 absolute focus-within:border-blue-500
					${rootClassName}
				`}
				type="checkbox"
				name={name}
				id={name}
				value={value}
			/>
			<svg className="fill-current hidden w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
		</span>
	);
};
