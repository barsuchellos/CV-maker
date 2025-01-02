import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { initialState } from "../../utils/formConstants";

export interface FormState {
    Name: string;
    Position: string;
    Image: string;
    Address: string;
    Number: string;
    Email: string;
    Description: string;
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeData: (state, action: PayloadAction<Partial<FormState>>) => {
            return {...state, ...action.payload};
        },
        resetData: () => initialState,
        updateImage: (state, action: PayloadAction<string>) => {
            state.Image = action.payload;
        }
    }
});

export const {changeData, resetData, updateImage} = formSlice.actions;
export default formSlice.reducer;
