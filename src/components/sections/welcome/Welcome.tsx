import Container from "../../ui/container/Container";
import {Button} from "../../ui/button/Button";
import {BlurEllipse} from "../../ui/blur_ellipse/BlurEllipse";

export function Welcome(): JSX.Element {
    const handleClick = () => {}

    return <section id={"welcome"} className={"welcome"}>
        <Container className="welcome__box">
            <div className="welcome__line">
                <h1 className="welcome__big">
                    Front-End
                </h1>
                <p className="welcome__small">
                    Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                </p>
            </div>
            <div className="welcome__line">
                <Button
                    onClick={handleClick}
                >
                    Start my career change
                </Button>
                <h1 className="welcome__big">
                    Developer
                </h1>
                <h3 className="welcome__subtext">
                    Courses
                </h3>
            </div>

            <BlurEllipse
                right={"-20%"}
                bottom={"20%"}
            />
            <BlurEllipse
                bottom={"0"}
                left={"-20%"}
            />
        </Container>
    </section>
}