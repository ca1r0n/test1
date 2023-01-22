import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {contactUsSlice} from "./reducers/contactus";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {notifySlice} from "./reducers/notify";

const rootReducer = combineReducers({
    contactUsReducer: contactUsSlice.reducer,
    notifyReducer: notifySlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
