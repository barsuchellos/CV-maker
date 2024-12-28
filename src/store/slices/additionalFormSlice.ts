import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface EducationItem {
    universityName: string,
    city: string,
    degree: string,
    subject: string,
    from: string,
    to: string,
}

export interface ExperienceItem {
    position: string,
    company: string,
    city: string,
    from: string,
    to: string,
}

const initialState = {
    experience: [] as ExperienceItem[],
    education: [] as EducationItem[],
};

const additionalFormSlice = createSlice({
    name: "add-form",
    initialState,
    reducers: {
        changeAdditionalData: (
            state,
            action: PayloadAction<{
                type: 'experience' | 'education';
                index: number;
                field: string;
                value: string;
            }>
        ) => {
            const {type, index, field, value} = action.payload;
            switch (type) {
                case 'experience':
                    state.experience[index] = {
                        ...state.experience[index],
                        [field]: value,
                    };
                    break;
                case 'education':
                    state.education[index] = {
                        ...state.education[index],
                        [field]: value,
                    };
                    break;
            }
        },
        addAdditionalDataForm: (state, action: PayloadAction<{
            type: 'experience' | 'education',
            data: ExperienceItem | EducationItem
        }>) => {
            switch (action.payload.type) {
                case 'experience':
                    state.experience = [...state.experience, action.payload.data as ExperienceItem]
                    break;
                case 'education':
                    state.education = [...state.education, action.payload.data as EducationItem]
                    break;
            }
        },
        resetAllValues: () => initialState,
        deleteInfo: (state, action: PayloadAction<{
            type: 'experience' | 'education';
            indexDelete: number;
        }>) => {
            switch (action.payload.type) {
                case 'experience':
                    state.experience = [...state.experience].filter((_,index)=>index !== action.payload.indexDelete)
                    break;
                case 'education':
                    state.education = [...state.education].filter((_,index)=>index !== action.payload.indexDelete)
                    break;
            }
        }
    }
});

export const {changeAdditionalData, addAdditionalDataForm, resetAllValues, deleteInfo} = additionalFormSlice.actions;
export default additionalFormSlice.reducer;
