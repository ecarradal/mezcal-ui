import React from 'react';

export type Type = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  type: Type;
}

export const Button = ({
  text,
  type = 'primary',
  ...props
}: ButtonProps) => (
  <button type="button" className={`button button-${type}`} {...props}>
    {text}
  </button>
);
