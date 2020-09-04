import React from 'react';
import './button.css';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * What radius it should
     */
    borderRadius?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large' | 'extra';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    borderRadius,
    label,
    ...props
}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor, borderRadius }}
            {...props}
        >
            {label}
        </button>
    );
};
