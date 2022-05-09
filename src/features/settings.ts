import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
    lang: 'en' | 'de';
    activeStep: string | null;
}

const initialState: SettingsState = {
    lang: 'de',
    activeStep: null
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<'en' | 'de'>) => {
            state.lang = action.payload;
        },
        setStep: (state, action: PayloadAction<string>) => {
            state.activeStep = action.payload;
        },
        resetStep: (state) => {
            state.activeStep = null;
        }
    }
});

// export actions
export const { setLanguage, setStep, resetStep } = settingsSlice.actions;

export default settingsSlice.reducer;