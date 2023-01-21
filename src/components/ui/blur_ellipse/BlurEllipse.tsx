import classNames from "classnames";
import Image from "next/image";

interface BlurEllipseProps {
    className?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
}

import BlurImageURl from "../../../../public/images/blur-ellipse.png"

export function BlurEllipse(props: BlurEllipseProps) {
    // return <div
    //     className={classNames("blur-ellipse", props.className)}
    //     style={{
    //         top: props.top,
    //         bottom: props.bottom,
    //         left: props.left,
    //         right: props.right,
    //     }}
    // />
    return <Image
        loading={"lazy"}
        src={BlurImageURl}
        alt={""}
        className={classNames("blur-ellipse", props.className)}
        style={{
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
        }}
    />
}