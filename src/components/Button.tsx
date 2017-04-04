import * as React from 'react';

interface ButtonProps {
    label: string
}

const Button = (props: ButtonProps) =>  <button>{props.label}</button>

export default Button;