import {useEffect, useRef} from "react";
import CenterAvatarUrl from "../../../../public/images/Kristin Watson.png";
import LeftAvatarUrl from "../../../../public/images/Wade Warren.png";
import RightAvatarUrl from "../../../../public/images/Robert Fox.png";
import Image from "next/image";

export function Mentors() {
    const canvasRef = useRef<HTMLCanvasElement>()

    useEffect(() => {
        if (canvasRef && !!canvasRef.current) {
            let center = canvasRef.current?.getContext("2d")
            if (center) {
                let gradC = center.createLinearGradient(200, 0, 200, 200);
                gradC.addColorStop(0, "rgba(21, 191, 253, 0.7)");
                gradC.addColorStop(1, "rgba(156, 55, 253, 0.7)");

                center.setLineDash([3, 3]);
                center.strokeStyle = gradC;
                center.beginPath();
                center.moveTo(200, 0);
                center.lineTo(200, 200);
                center.stroke();
            }

            let left = canvasRef.current?.getContext("2d")
            if (left) {
                let gradL = left.createLinearGradient(200, 0, 200, 200);
                gradL.addColorStop(0, "rgba(21, 191, 253, 0.7)");
                gradL.addColorStop(1, "rgba(156, 55, 253, 0.7)");

                left.setLineDash([3, 3]);
                left.strokeStyle = gradL;
                left.beginPath();
                left.moveTo(200, 0);
                left.bezierCurveTo(200, 150, 0, 0, 20, 200);
                left.stroke();
            }

            let right = canvasRef.current?.getContext("2d")
            if (right) {
                let gradR = right.createLinearGradient(200, 0, 200, 200);
                gradR.addColorStop(0, "rgba(21, 191, 253, 0.7)");
                gradR.addColorStop(1, "rgba(156, 55, 253, 0.7)");

                right.setLineDash([3, 3]);
                right.strokeStyle = gradR;
                right.beginPath();
                right.moveTo(200, 0);
                right.bezierCurveTo(200, 150, 400, 0, 380, 200);
                right.stroke();
            }
        }
    }, [canvasRef])

    return <div className={"mentors"}>
        <h3 className={"mentors__title"}>Mentors</h3>
        <div
            style={{
                position: "relative"
            }}
        >
            <canvas
                ref={canvasRef as any} // TODO: fix
                height={200}
                width={400}
            />
            <Avatar
                x={110}
                y={120}
                AvatarUrl={CenterAvatarUrl.src}
                Title={"Kristin Watson"}
                Description={"Front-end engineers work closely with designers"}
            />
            <Avatar
                x={-100}
                y={170}
                AvatarUrl={LeftAvatarUrl.src}
                Title={"Wade Warren"}
                Description={"Front-end engineers work closely with designers"}
            />
            <Avatar
                x={320}
                y={170}
                AvatarUrl={RightAvatarUrl.src}
                Title={"Robert Fox"}
                Description={"Front-end engineers work closely with designers"}
            />
        </div>
    </div>
}

interface AvatarProps {
    AvatarUrl: string
    Title: string
    Description: string
    x: number
    y: number
}

function Avatar(props: AvatarProps) {
    return <div className={"avatar"}
                style={{
                    top: props.y,
                    left: props.x,
                }}
    >
        <div className={"avatar__img-box"}>
            <Image
                width={188}
                height={188}
                src={props.AvatarUrl}
                alt="avatar"
                className={"avatar__img"}
            />
            <h4 className={"avatar__title"}>{props.Title}</h4>
            <div className={"typo_p2"}>{props.Description}</div>
        </div>
    </div>
}