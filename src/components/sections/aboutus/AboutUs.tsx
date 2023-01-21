import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import Image from "next/image";
import FrontSvg from "../../../../public/images/svg/Front-End (Stroke).svg"
import {Star} from "../../ui/star/Star";
import {Mentors} from "./Mentors";

export  function AboutUs(): JSX.Element {
    return <section id={"aboutus"} className={"about-us"}>
        <Container>
            <TitleBox title={"About Us"}/>
            <div  className="about-us__box">
                <Mentors />
                <p className={"about-us__text"}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                    This Career Path will teach you not only the necessary languages and technologies, but how to think
                    like a front-end engineer, too.
                </p>
                <Image
                    loading={"lazy"}
                    className={"about-us__front"}
                    src={FrontSvg}
                    alt={"front"}
                />
            </div>

            <Star
                top={"10%"}
                left={"10%"}
            />
            <Star
                top={"2%"}
                left={"50%"}
            />
            <Star
                top={"7%"}
                right={"20%"}
            />
            <Star
                top={"0"}
                right={"0"}
                width={"40"}
                height={"40"}
            />
        </Container>
    </section>
}


