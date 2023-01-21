import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ContactUsState {
    Status: "ok" | "error" | ""
    IsLoading: boolean
}

const initialState: ContactUsState = {
    Status: "",
    IsLoading: false,
}

export const contactUsSlice = createSlice({
    name: "contactUs",
    initialState,
    reducers: {
        start(state: ContactUsState) {
            state.IsLoading = true
        },
        success(state: ContactUsState) {
            state.IsLoading = false
            state.Status = "ok"
        },
        error(state: ContactUsState) {
            state.IsLoading = false
            state.Status = "error"
        },
    }
})

