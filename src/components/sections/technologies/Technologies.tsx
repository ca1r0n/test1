import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import Image from "next/image";

import AngularURL from "../../../../public/images/angular.png"
import ReactURL from "../../../../public/images/react.png"
import VueURL from "../../../../public/images/vue.png"
import JsURL from "../../../../public/images/js.png"
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";
import {Star} from "../../ui/star/Star";

export function Technologies(): JSX.Element {
    const list: ListItemProps[] = [
        {
            ImageUrl: AngularURL.src,
            Title: "Angular",
        },
        {
            ImageUrl: ReactURL.src,
            Title: "React",
        },
        {
            ImageUrl: VueURL.src,
            Title: "Vue.js",
        },
        {
            ImageUrl: JsURL.src,
            Title: "JavaScript",
        },
    ]

    return <section id={"technologies"} className={"technologies"}>
        <Container className={"technologies__box"}>
            <TitleBox
                title={"Programming technologies"}
                subtitle={"By the end, you’ll have the portfolio and interview skills you need to start your new career."}
            />
            <div className={"technologies__list"}>
                {list.map((item, i) => {
                    return <ListItem
                        key={i}
                        {...item}
                    />
                })}
            </div>


            <BlurEllipse
                right={"-20%"}
                top={"-50%"}
            />
            <BlurEllipse
                bottom={"-30%"}
                left={"-20%"}
            />
            <Star
                top={"-50%"}
                left={"50%"}
            />
            <Star
                top={"0"}
                right={"30%"}
            />
            <Star
                top={"0"}
                right={"5%"}
                width={"40"}
                height={"40"}
            />
        </Container>
    </section>
}

interface ListItemProps {
    ImageUrl: string
    Title: string
}

function ListItem(props: ListItemProps) {
    return <div
        className={"technologies__item"}
    >
        <Image
            loading={"lazy"}
            className={"technologies__item-img"}
            width={162}
            height={136}
            src={props.ImageUrl}
            alt={props.Title}
        />

        <h4 className={"technologies__item-title"}>
            {props.Title}
        </h4>
    </div>
}