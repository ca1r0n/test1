import {AppDispatch} from "../index";
import {PostContact, PostContactDTO} from "../../api/contact.api";
import {contactUsSlice} from "../reducers/contactus";
import {notifySlice} from "../reducers/notify";
import {isAxiosError} from "axios";

export const sendContactUs = (dto: PostContactDTO) => async (dispatch: AppDispatch) => {
    try {
        dispatch(contactUsSlice.actions.start())
        await PostContact(dto)
        dispatch(contactUsSlice.actions.success())
        dispatch(notifySlice.actions.new({
            Message: "Success send!",
            Status: "ok",
        }))
    } catch (e) {
        dispatch(contactUsSlice.actions.error())
        if (isAxiosError(e)) {
            dispatch(notifySlice.actions.new({
                Message: e.message,
                Status: "error",
            }))
        }
    }
}