import {FC} from "react";
import './index.scss'
interface IHeader {
    text:string
}

const Header:FC<IHeader> = ({text}) => {
    return (
        <header className='header'>
            <h1 className='header__title'>{text}</h1>
        </header>
    );
};

export default Header;
