import './index.scss'
import {FC} from "react";
import {EducationItem, ExperienceItem} from "../../../store/slices/additionalFormSlice.ts";

interface ICvInfoBox {
    text: string[] | ExperienceItem[] | EducationItem[];
    title: string;
}

const CvInfoBox: FC<ICvInfoBox> = ({text = ['text'], title = 'name'}) => {
    const renderContent = (item: string | ExperienceItem | EducationItem, index: number) => {
        if (typeof item === 'string') {
            return <p key={index} className="CvInfoBox__text">{item}</p>;
        }

        if ('company' in item) {
            const experienceItem = item as ExperienceItem;
            return (
                <div key={index} className="CvInfoBox__experience">
                    <div className="CvInfoBox__period-container">
                        <span className="CvInfoBox__date">{experienceItem.from}</span>
                        <span className="CvInfoBox__date-separator"> - </span>
                        <span className="CvInfoBox__date">{experienceItem.to}</span>
                    </div>

                    <div className="CvInfoBox__details">
                        <p className="CvInfoBox__position">{experienceItem.position}</p>
                        <div className="CvInfoBox__company-info">
                            <p className="CvInfoBox__company">{experienceItem.company}</p>
                            <p className="CvInfoBox__city">{experienceItem.city}</p>
                        </div>
                    </div>
                </div>
            );
        }

        if ('universityName' in item) {
            const educationItem = item as EducationItem;
            return (
                <div key={index} className="CvInfoBox__education">
                    <div className="CvInfoBox__period-container">
                        <span className="CvInfoBox__date">{educationItem.from}</span>
                        <span className="CvInfoBox__date-separator"> - </span>
                        <span className="CvInfoBox__date">{educationItem.to}</span>
                    </div>

                    <div className="CvInfoBox__details">
                        <p className="CvInfoBox__university">{educationItem.universityName}</p>
                        <div className="CvInfoBox__education-info">
                            <p className="CvInfoBox__degree">{educationItem.degree}</p>
                            <p className="CvInfoBox__city">{educationItem.city}</p>
                        </div>
                        <p className="CvInfoBox__subject">{educationItem.subject}</p>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='CvInfoBox'>
            <h4 className='CvInfoBox__name'>{title}</h4>
            <div className='CvInfoBox__divider'></div>
            <div className='CvInfoBox__content'>
                {text.map((item, index) => renderContent(item, index))}
            </div>
        </div>
    );
};

export default CvInfoBox;
