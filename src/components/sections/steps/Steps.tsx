import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import {Card} from "../../ui/card/Card";
import classNames from "classnames";
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";
import {Star} from "../../ui/star/Star";
import {useEffect, useRef, useState} from "react";


export function Steps() {


    const steps: StepProps[] = [
        {
            OverTitle: "Step 1",
            Title: 'Introduction to Front-End ',
            Description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: false,
        },
        {
            OverTitle: "Step 2",
            Title: 'Overview of Development',
            Description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: true,
        },
        {
            OverTitle: "Step 3",
            Title: 'Introduction to Front-End ',
            Description: "Lorem ipsuLsum dolor sit ameLorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem Lorem ipsuLsum dolor sit amet consectLorem t consectLorem ipsum dolor sit amet consectLorem ipsum dolor sit amet consectm dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: false,
        },
        {
            OverTitle: "Step 4",
            Title: 'Overview of Development',
            Description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: true,
        },
        {
            OverTitle: "Step 5",
            Title: 'Introduction to Front-End ',
            Description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: false,
        },
        {
            OverTitle: "Step 6",
            Title: 'Overview of Development',
            Description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
            Right: true,
        },
    ]

    // need to def blue line
    const list = useRef<HTMLDivElement | null>(null)
    const [lineCords, setLineCords] = useState({
        top: 0,
        bottom: 0,
    })

    useEffect(() => {
        if (!!list) {
            const first = list.current?.children[0]
            const second = list.current?.children[list.current?.children.length - 2]

            if (first?.clientHeight && second?.clientHeight) {
                setLineCords({
                    top: first?.clientHeight / 2,
                    bottom: second?.clientHeight / 2,
                })
            }
        }
    }, [list])
    //  ----

    return <section id={"steps"} className={"steps"}>
        <Container>
            <TitleBox title={"Steps"}/>
            <div ref={list} className="steps__list">
                {steps.map((step, i) => {
                    return <Step
                        {...step}
                        key={i}
                    />
                })}
                <div
                    style={{
                        top: lineCords.top,
                        bottom: lineCords.bottom,
                    }}
                    className="steps__line"></div>
            </div>
        </Container>


        <Star
            top={"0"}
            left={"30%"}
            width={"40"}
            height={"30"}
        />
        <BlurEllipse
            top={"50%"}
            left={"0"}
        />
    </section>
}

interface StepProps {
    OverTitle: string
    Title: string
    Description: string
    Right?: boolean
}

function Step(props: StepProps) {
    return <Card className={classNames(
        "step",
        props.Right ? "step--right" : ""
    )}>
        <h4 className={"step__over-title"}>
            {props.OverTitle}
        </h4>
        <h3 className="step__title">
            {props.Title}
        </h3>
        <p className="step__description">
            {props.Description}
        </p>
        <div className="step__arrow"/>
        <div className="step__elems"/>
    </Card>
}