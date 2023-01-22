import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface notifyMessage {

    Message: string
    Status: "ok" | "error"
}

interface notifyState {
    msg: notifyMessage | null
}

const initialState: notifyState = {
    msg: null
}


export const notifySlice = createSlice({
    name: "notify",
    initialState,
    reducers: {
        new(state: notifyState, action: PayloadAction<Required<notifyMessage>>) {
            state.msg = action.payload
        },
    }
})