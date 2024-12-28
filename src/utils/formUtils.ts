import {changeData, resetData} from "../store/slices/formSlice.ts";
import {
    addAdditionalDataForm,
    changeAdditionalData,
    deleteInfo,
    resetAllValues
} from "../store/slices/additionalFormSlice.ts";
import {useDispatch} from "react-redux";
import {newEducationData, newExperienceData} from "./formConstants.ts";

export const useFormHandlers = () => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(changeData({[name]: value}));
    };

    const handleAdditionalChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'experience' | 'education',
        index: number
    ) => {
        const {name, value} = e.target;
        dispatch(
            changeAdditionalData({
                type,
                index,
                field: name,
                value,
            })
        );
    };

    const additionalObjectData = (type: 'experience' | 'education') => {
        dispatch(
            addAdditionalDataForm({
                type,
                data: type === 'experience' ? {...newExperienceData} : {...newEducationData},
            })
        );
    };

    const resetValuesData = () => {
        dispatch(resetData());
        dispatch(resetAllValues());
    };

    const deleteFormItem = (type: 'experience' | 'education', indexDelete:number ) => {
        dispatch(deleteInfo({type,indexDelete})
        )}
    return {
        handleChange,
        handleAdditionalChange,
        additionalObjectData,
        resetValuesData,
        deleteFormItem,
    };
};
