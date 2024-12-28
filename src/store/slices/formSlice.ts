import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FormState {
    Name: string;
    Position: string;
    Image: string;
    Address: string;
    Number: string;
    Email: string;
    Description: string;
}

export const initialState: FormState = {
    Name: '',
    Position: '',
    Image: '',
    Address: '',
    Number: '',
    Email: '',
    Description: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeData: (state, action: PayloadAction<Partial<FormState>>) => {
            return {...state, ...action.payload};
        },
        resetData: () => initialState
    }
});

export const {changeData, resetData} = formSlice.actions;
export default formSlice.reducer;
