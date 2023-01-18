import Container from "../../ui/container/Container";
import Image from "next/image";

import logoURl from "../../../../public/images/svg/logo_full.svg";
import facebookURl from "../../../../public/images/svg/facebook.svg";
import gitlabURl from "../../../../public/images/svg/gitlab.svg";
import linkedinURl from "../../../../public/images/svg/linkedin.svg";
import twitterURl from "../../../../public/images/svg/twitter.svg";

export function Footer(): JSX.Element {
    const imageHandler = () => {
        // TODO: click
    }

    return <footer id={"footer"} className={"footer"}>
        <Container className={"footer__box"}>
            <div className="footer__block">
                <Image
                    src={logoURl}
                    alt={"logo"}
                    width={169}
                    height={33}
                    onClick={imageHandler}
                />
                <p>Wisconsin Ave, Suite 700<br></br>Chevy Chase, Maryland 20815</p>
            </div>
            <div className="footer__block">
                <div className="footer__title">
                    Company
                </div>
                <Navigate />
            </div>
            <div className="footer__block">
                <div className="footer__title">
                    Social media
                </div>
                <Social />
            </div>
        </Container>
    </footer>
}

function Navigate(){
    const items: NavItemProps[] = [
        {
            Title: "About Us",
            Href: "",
        },
        {
            Title: "Review",
            Href: "",
        },
        {
            Title: "Steps",
            Href: "",
        },
        {
            Title: "Gallery",
            Href: "",
        },
        {
            Title: "FAQs",
            Href: "",
        }
    ]

    return <div className={"footer__nav"}>
        {items.map((item, i) => {
            return <NavItem key={i} {...item} />
        })}
    </div>
}

interface NavItemProps {
    Title: string
    Href: string
}

function NavItem(props: NavItemProps) {
    return <a
        className={"footer__nav-item typo_p2"}
        href={props.Href}
    >
        {props.Title}
    </a>
}

function Social(){
    const items: {
        ImageUrl: string
        To: string
    }[] = [
        {
            ImageUrl: facebookURl,
            To: "",
        },
        {
            ImageUrl: gitlabURl,
            To: "",
        },
        {
            ImageUrl: twitterURl,
            To: "",
        },
        {
            ImageUrl: linkedinURl,
            To: "",
        },
    ]

    return <div className={"footer__social"}>
        {items.map((item, i) => {
            return <a href={item.To} key={i}>
                <Image src={item.ImageUrl}  alt={""}/>
            </a>
        })}
    </div>
}