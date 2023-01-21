import {AppDispatch} from "../index";
import {PostContact, PostContactDTO} from "../../api/contact.api";
import {contactUsSlice} from "../reducers/contactus";

export const sendContactUs = (dto: PostContactDTO) => async (dispatch: AppDispatch) => {
    try {
        dispatch(contactUsSlice.actions.start())
        await PostContact(dto)
        dispatch(contactUsSlice.actions.success())
    } catch (e) {
        dispatch(contactUsSlice.actions.error())
    }
}