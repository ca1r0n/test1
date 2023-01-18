import {HTMLAttributes} from "react";
import classNames from "classnames";

export function Card(props: HTMLAttributes<HTMLDivElement>) {
    return <div
        {...props}
        className={classNames(
            "card",
            props.className
        )}
    />
}