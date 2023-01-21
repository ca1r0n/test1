import classNames from "classnames";

interface StarProps {
    className?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    rotate?: string
    width?: string
    height?: string
}


export function Star(props: StarProps) {
    return <svg className={classNames("star", props.className)}
         style={{
             top: props.top,
             bottom: props.bottom,
             left: props.left,
             right: props.right,
             rotate: props.rotate,
         }}
                width={props.width || 16}
                height={props.height  || 16}
                viewBox="0 0 16 18"
                fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.38277 0.289911L5.5898 6.89786L0.474104 10.0174L6.3445 11.2174L9.33114 17.165L10.1241 10.5571L15.2398 7.43755L9.36941 6.23749L6.38277 0.289911Z" fill="#15BFFD"/>
    </svg>
}