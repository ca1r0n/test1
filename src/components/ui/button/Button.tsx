import classNames from "classnames";
import {MouseEventHandler} from "react";

interface ButtonProps {
    children?: JSX.Element | string
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    fullWidth?: boolean
    type?: "submit" | "reset" | "button"
}

export function Button(props: ButtonProps) {
    return <button
        className={classNames(
            "button",
            props.className,
            props.fullWidth ? "full-width" : ""
        )}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
    >
        {props.children}
    </button>
}