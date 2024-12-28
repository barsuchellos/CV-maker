import {configureStore} from "@reduxjs/toolkit";
import formReducer from './slices/formSlice';
import addFormReducer from './slices/additionalFormSlice.ts'


export const store = configureStore({
    reducer: {
        form: formReducer,
        addForm: addFormReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
