import {HTMLAttributes} from "react";

export default function Container(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return <div
        {...props}
        className={"container " + (props.className ? props.className : "")}
    />
}