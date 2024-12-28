import {FC, ChangeEvent} from "react";
import './index.scss'
interface InputProps {
    name: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    key?: number,
}

const Input: FC<InputProps> = ({name, type = "text", value, onChange}) => {
    return (
        <label className='label' htmlFor={name}>
            {name}
            <input
                name={name}
                type={type}
                placeholder={name}
                value={value}
                onChange={onChange}
                className='input'
            />
        </label>

    );
};

export default Input;
