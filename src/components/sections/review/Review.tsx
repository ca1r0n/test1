import Container from "../../ui/container/Container";
import {TitleBox} from "../../ui/titie-box/TitleBox";

import SliderFirstURl from "../../../../public/images/man 1.png"
import SliderSecondURl from "../../../../public/images/man 2.png"
import SliderThirdURl from "../../../../public/images/woman 1.png"
import {Slider} from "./Slider";
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";


export function Review() {
    const items = [
        {
            ImageUrl: SliderFirstURl.src,
            Title: "Best courses ever",
            Text: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the \"teacher\" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.",
        },
        {
            ImageUrl: SliderSecondURl.src,
            Title: "Amazing teaching",
            Text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
        },
        {
            ImageUrl: SliderThirdURl.src,
            Title: "Simple and easy",
            Text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
        },
    ]

    return <section className="review">
        <Container>
            <TitleBox title={"Review"}/>
            <Slider Slides={items}/>

            <BlurEllipse
                bottom={"40%"}
                right={"-20%"}
            />
        </Container>
    </section>
}

