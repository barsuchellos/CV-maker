import {configureStore} from "@reduxjs/toolkit";
import formReducer from './slices/formSlice';
import addFormReducer from './slices/additionalFormSlice.ts'
export const store = configureStore({
    reducer: {
        form: formReducer,
        addForm: addFormReducer,
    },
})
