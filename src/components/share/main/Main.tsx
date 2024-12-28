import {FC, useRef} from "react";
import Form from "../form/Form.tsx";
import PdfFile from "../pdf-file/PdfFile.tsx";
import {useReactToPrint} from "react-to-print";
import './index.scss'
const Main: FC = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const handlePrint = useReactToPrint({contentRef});

    return (
        <main style={{display:'flex'}}>
            <div className='form__container'>
                <Form/>
                <button className='button__print' onClick={() => handlePrint()}>
                    Створити PDF
                </button>
            </div>
                <PdfFile contentRef={contentRef}/>
        </main>
    );
};

export default Main;
