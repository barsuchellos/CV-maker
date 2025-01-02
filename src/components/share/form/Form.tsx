import {FC} from "react";
import Input from "../../common/input/Input.tsx";
import "./index.scss";
import {useSelector} from "react-redux";
import Button from "../../common/button/Button.tsx";
import {useFormHandlers} from "../../../utils/formUtils.ts";
import {RootState} from "../../../store/store.ts";

const Form: FC = () => {
    const {
        handleChange,
        handleAdditionalChange,
        additionalObjectData,
        resetValuesData,
        deleteFormItem
    } = useFormHandlers();

    const formData = useSelector((state: RootState) => state.form);
    const additionalFormData = useSelector((state:RootState) => state.addForm);



    return (
        <form className="form-container">
            {Object.entries(formData)
                .filter(([name]: [string, unknown]) => name !== 'Image')
                .map(([name, value], index) => (
                    <Input
                        key={index + 999}
                        name={name}
                        value={value as string}
                        onChange={handleChange}
                    />
                ))}

            <Input
                name="Image"
                type="file"
                accept="image/*"
                onChange={handleChange}
            />

            <div className="experience-section">
                <h3>Experience</h3>
                {additionalFormData.experience.map((element, index) => (
                    <div key={`experience-${index}`} className="experience-item">
                        {Object.entries(element).map(([field, value]) => (
                            <Input
                                key={index + 755}
                                name={field}
                                value={value as string}
                                onChange={(e) => handleAdditionalChange(e, 'experience', index)}
                            />
                        ))}
                        <Button
                            type="button"
                            onClick={() => deleteFormItem('experience', index)}
                            text={'Delete'}
                        />
                    </div>
                ))}
                <Button
                    type="button"
                    onClick={() => additionalObjectData('experience')}
                    text={'Add experience'}
                />
            </div>

            <div className="education-section">
                <h3>Education</h3>
                {additionalFormData.education.map((element, index) => (
                    <div key={`education-${index}`} className="education-item">
                        {Object.entries(element).map(([field, value]) => (
                            <>
                                <Input
                                    key={index}
                                    name={field}
                                    value={value as string}
                                    onChange={(e) => handleAdditionalChange(e, 'education', index)}
                                />
                            </>
                        ))}
                        <Button
                            type="button"
                            onClick={() => deleteFormItem('education', index)}
                            text={'Delete'}
                        />
                    </div>
                ))}

                <Button
                    type="button"
                    onClick={() => additionalObjectData('education')}
                    text={'Add education'}
                />
                <Button
                    type="button"
                    onClick={() => resetValuesData()}
                    text={'Reset All'}
                />
            </div>
        </form>
    );
};

export default Form;
