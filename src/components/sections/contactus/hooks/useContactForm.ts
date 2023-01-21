import {FormEvent, useCallback, useRef, useState} from "react";
import {PostContact} from "../../../../api/contact.api";
import {SubmitHandler, useForm} from "react-hook-form";
import {object, ObjectSchema, string, ValidationError} from "yup";

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

    const {register, handleSubmit} = useForm<Fields>()

    const onSubmit = (data: Fields) => {
        contactSchema.validate(data, { abortEarly: false }).then(() => {
            PostContact(data as Required<Fields>)
        }).catch(function (err) {
            const errors: Fields = {}
            err.inner.forEach((e: ValidationError)=> {
                if (e.path) {
                    errors[e.path as keyof Fields] = e.message
                }
            });
            setErrors(errors)
        });
    }

    return {
        register ,
        handleSubmit: handleSubmit(onSubmit),
        errors,
    }
}
