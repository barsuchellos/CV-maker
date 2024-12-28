import './index.scss'

const Button = ({text, onClick, type}) => {
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
