import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";
import Image from "next/image";


import DeveloperOneUrl from "../../../../public/images/developer1.png"
import DeveloperTwoUrl from "../../../../public/images/developer2.png"
import DeveloperThirdUrl from "../../../../public/images/developer3.png"
import DeveloperFourUrl from "../../../../public/images/developer4.png"
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";
import {Star} from "../../ui/star/Star";

export function Gallery() {
    return <section className="gallery">
        <Container>
            <TitleBox title={"Gallery"}/>
            <div className="gallery__box">
                <p className={"gallery__item--six"}>By the end of this course, you will be able to develop and publish your very own Google
                    Chrome extension! In this course we will focus on coding exercises and projects.
                </p>
                <Image
                    loading={"lazy"}
                    className={"gallery__image gallery__item--first"}
                    src={DeveloperOneUrl}
                    alt={"developer"}
                />
                <Image
                    loading={"lazy"}
                    className={"gallery__image gallery__item--second"}
                    src={DeveloperTwoUrl}
                    alt={"developer"}
                />
                <Image
                    loading={"lazy"}
                    className={"gallery__image gallery__item--third"}
                    src={DeveloperThirdUrl}
                    alt={"developer"}
                />
                <Image
                    loading={"lazy"}
                    className={"gallery__image gallery__item--four"}
                    src={DeveloperFourUrl}
                    alt={"developer"}
                />
                <p className={"gallery__item--five"}>If you would like to learn web development and get a job in the tech industry, you
                    are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with
                    over 15 hours of HD video tutorials! This course was designed to be extremely beginner
                    friendly. We will begin with the very basics of HTML and build a simple web page.</p>
            </div>



            <BlurEllipse
                bottom={"0"}
                left={"-20%"}
            />
            <BlurEllipse
                bottom={"-40%"}
                right={"-20%"}
            />
            <Star
                bottom={"20%"}
                width={"40"}
                height={"30"}
                right={"30%"}
            />
            <Star
                bottom={"0"}
                right={"50%"}
            />
            <Star
                bottom={"0"}
                left={"10%"}
            />
        </Container>
    </section>
}