import {useState} from "react";
import {useForm} from "react-hook-form";
import {object, string, ValidationError} from "yup";
import {sendContactUs} from "../../../../store/actions/contactus";
import {AnyAction} from "redux";
import {useAppDispatch, useAppSelector} from "../../../../store";

export type Fields = {
    name?: string
    phone?: string
    email?: string
}

let contactSchema = object({
    name: string().required().min(4),
    email: string().email().required(),
    phone: string().required().min(4),
});

export function usContactForm() {
    const [errors, setErrors] = useState<Fields>({})
    const dispatch = useAppDispatch()
    const {IsLoading, Status} = useAppSelector(state => state.contactUsReducer)

    const {register, handleSubmit} = useForm<Fields>()

    const onSubmit = (data: Fields) => {
        setErrors({})
        contactSchema.validate(data, {abortEarly: false}).then(() => {
            dispatch(sendContactUs(data as Required<Fields>))
        }).catch(function (err) {
            const errors: Fields = {}
            err.inner.forEach((e: ValidationError) => {
                if (e.path) {
                    errors[e.path as keyof Fields] = e.message
                }
            });
            setErrors(errors)
        });
    }

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        IsLoading,
        Status
    }
}
