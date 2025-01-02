import { FC, ChangeEvent } from "react";
import './index.scss';
import { useDispatch } from 'react-redux';
import {updateImage} from "../../../store/slices/formSlice.ts";

interface InputProps {
    name: string;
    type?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    key?: number;
    accept?: string;
}

const Input: FC<InputProps> = ({ name, type = "text", value, onChange, accept }) => {
    const dispatch = useDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (type === 'file') {
            const file = e.target.files?.[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                dispatch(updateImage(imageUrl));
            }
        } else if (onChange) {
            onChange(e);
        }
    };

    return (
        <label className='label' htmlFor={name}>
            {name}
            <input
                name={name}
                type={type}
                placeholder={name}
                value={type === 'file' ? undefined : value}
                onChange={handleInputChange}
                className='input'
                accept={accept}
            />
        </label>
    );
};

export default Input;
