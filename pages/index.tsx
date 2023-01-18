import {Header} from "../src/components/sections/header/Header";
import {Welcome} from "../src/components/sections/welcome/Welcome";
import {AboutUs} from "../src/components/sections/aboutus/AboutUs";
import {Technologies} from "../src/components/sections/technologies/Technologies";
import {Footer} from "../src/components/sections/footer/Footer";
import {ContactUs} from "../src/components/sections/contactus/ContactUs";
import {Steps} from "../src/components/sections/steps/Steps";
import {Review} from "../src/components/sections/review/Review";
import {Gallery} from "../src/components/sections/gallery/Gallery";
import {Questions} from "../src/components/sections/questions/Questions";

export default function Home() {
    return (
        <>
            <Header />
            <Welcome />
            <AboutUs />
            <Technologies />
            <Steps />
            <Questions />
            <Review />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    )
}
