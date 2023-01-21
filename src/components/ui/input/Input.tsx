import  {ChangeEvent, FocusEventHandler, forwardRef, HTMLInputTypeAttribute} from "react";
import classNames from "classnames";

interface InputProps {
    value?: string | readonly string[] | number
    type?: HTMLInputTypeAttribute
    placeholder?: string
    disabled?: boolean
    error?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: FocusEventHandler<HTMLInputElement>
    name?: string
    id?: string
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <div className={"input"}>
        <div className={classNames(
            "input__box",
            props.disabled ? "input__box--disabled" : "",
            props.error ? "input__box--error" : ""
        )}>
            <input
                {...props}
                ref={ref}
                className={"input__input typo_p1"}

            />
        </div>
        {props.error && <p>{props.error}</p>}
    </div>
})
Input.displayName = "Input"

export {Input}