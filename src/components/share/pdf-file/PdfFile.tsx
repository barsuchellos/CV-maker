import {FC} from "react";
import './index.scss'
import CvInfoBox from "../../common/cv-info-box/CVInfoBox.tsx";
import {useSelector} from "react-redux";
import image from '../../../assets/vectorstock_42797469.svg'
import {RootState} from "../../../store/store.ts";

interface PdfFileProps {
    contentRef: React.RefObject<HTMLDivElement>;
  }

const PdfFile: FC<PdfFileProps> = ({contentRef}) => {
    const formData = useSelector((state:RootState) => state.form)
    const additionalFormData = useSelector((state:RootState) => state.addForm)

    return (
        <div ref={contentRef} className='pfdFileA4'>
            <div className='pfdFileA4__header-container'>
                <h1 className='pfdFileA4__name'>{formData['Name']}</h1>
                <h2 className='pfdFileA4__position'>{formData['Position']}</h2>
            </div>

            <section className='pfdFileA4__info-container'>
                <div className='pfdFileA4__deep-info-container'>
                    <CvInfoBox title='Description' text={[formData['Description']]}/>
                    {Array.isArray(additionalFormData.experience) &&
                        additionalFormData.experience.length > 0 && (
                            <CvInfoBox title='Experience' text={additionalFormData.experience}/>
                        )}
                    {Array.isArray(additionalFormData.education) &&
                        additionalFormData.education.length > 0 && (
                            <CvInfoBox title='Education' text={additionalFormData.education}/>
                        )}
                </div>
                <div className='pfdFileA4__personal-info-container'>
                    <div className='pfdFileA4__personal-info-container'>
                        <div className='pfdFileA4__photo-container'>
                            <img src={formData['Image'] || image} alt="User photo" className='pfdFileA4__photo'/>
                        </div>
                        <div className='pfdFileA4__details-section'>
                        <h3 className='pfdFileA4__details-title'>Personal Details</h3>
                            <div className='pfdFileA4__details-group'>
                                <h4 className='pfdFileA4__details-label'>Address:</h4>
                                <p className='pfdFileA4__details-value'>{formData['Address']}</p>
                                <h4 className='pfdFileA4__details-label'>Phone Number:</h4>
                                <p className='pfdFileA4__details-value'>{formData['Number']}</p>
                                <h4 className='pfdFileA4__details-label'>Email:</h4>
                                <p className='pfdFileA4__details-value'>{formData['Email']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PdfFile;
