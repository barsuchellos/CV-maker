import './index.scss'
import { FC } from 'react';
interface ButtonProps {
    text: string; 
    onClick: () => void; 
    type?: "button" | "submit" | "reset";
}

const Button:FC<ButtonProps> = ({text, onClick, type}) => {
    return (
        <button
            type={type}
            className='button'
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
