import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import {ImageSVG} from "./ImageSvg";
import {useState} from "react";
import classNames from "classnames";
import Image from "next/image";

import PlusUrl from "../../../../public/images/svg/plus.png"
import MinusUrl from "../../../../public/images/svg/minus.png"
import {Card} from "../../ui/card/Card";
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";
import {Star} from "../../ui/star/Star";

export function Questions() {
    return <section id={"questions"} className="questions">
        <Container>
            <TitleBox title={"Frequently Asked Questions"}/>
            <div className="questions__box">
                <div className="questions__left">
                    <p>Do you have any kind of questions?<br/>We are here to help.</p>
                    <ImageSVG/>
                </div>
                <ListQuestion/>
            </div>


            <BlurEllipse
                right={"-20%"}
                top={"-20%"}
            />
            <BlurEllipse
                bottom={"-20%"}
                left={"-20%"}
            />
            <Star
                bottom={"0"}
                left={"10%"}
                width={"40"}
                height={"30"}
            />
            <Star
                bottom={"20%"}
                right={"30%"}
            />
        </Container>
    </section>
}

function ListQuestion() {
    const [active, setActive] = useState(0)
    const list: QuestionProps[] = [
        {
            Title: "What is the price?",
            Description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            Title: "What is the price?",
            Description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            Title: "What is the price?",
            Description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            Title: "What is the price?",
            Description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
        {
            Title: "What is the price?",
            Description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
        },
    ]

    const onClick = (i: number) => {
        return () => setActive(i)
    }

    return <div className={"questions__list"}>
        {list.map((item, i) => {
            return <Question
                {...item}
                key={i}
                Active={i == active}
                OnClick={onClick(i)}
            />
        })}
    </div>
}


interface QuestionProps {
    Title: string
    Description: string
    Active?: boolean
    OnClick?: () => void
}

function Question(props: QuestionProps) {
    return <Card className={classNames(
        "questions__item",
        props.Active ? "questions__item--active" : ""
    )}>
        <div className="questions__item-box">
            <div className="questions__panel">
                <h4>{props.Title}</h4>
                <IconQuestion
                    Active={props.Active}
                    OnClick={props.OnClick}
                />
            </div>
            <p className={"questions__content"}>
                {props.Description}
            </p>
        </div>
    </Card>
}

interface IconQuestionProps {
    OnClick?: () => void
    Active?: boolean
}

function IconQuestion(props: IconQuestionProps) {
    return <div
        className="questions__btn"
        onClick={props.OnClick}
    >
        <Image
            src={props.Active ? MinusUrl : PlusUrl}
            alt={""}
        />
    </div>
}