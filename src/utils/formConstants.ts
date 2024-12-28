import { FormState } from "../store/slices/formSlice";

export const newExperienceData = {
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
};

export const newEducationData = {
    universityName: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
};


export const initialState: FormState = {
    Name: '',
    Position: '',
    Image: '',
    Address: '',
    Number: '',
    Email: '',
    Description: '',
};

