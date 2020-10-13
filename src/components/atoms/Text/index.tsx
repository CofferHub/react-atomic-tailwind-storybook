import React from "react";

export interface TextProps {
  /**
   * This is the text label
   */
  label: string;
  /**
   * This is the font-size text
   */
  size?: number;
  /**
   * This is the text color
   */
  color?: string;
  /**
   * This is the text weight
   */
  weight?: number;
  /**
   * This is font family
   */
  family?: string;
  /**
   * This is the text transform - 'uppercase', 'lowercase', 'Capitalize'
   */
  transform?: string;
}

export const Text: React.FC<TextProps> = ({
  label = "Text",
  size = 12,
  color = "#ff6100",
  weight = 600,
  family,
  transform = "none",
  ...props
}) => {
  return (
    <>
      <p
        style={{
          fontSize: size,
          color: color,
          fontWeight: weight,
          fontFamily: family,
        }}
        {...props}
      >
        {label}
      </p>
    </>
  );
};
