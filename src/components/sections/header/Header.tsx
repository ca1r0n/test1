import Container from "../../ui/container/Container";
import Image from "next/image";

import logoURl from "../../../../public/images/svg/logo_full.svg"
import classNames from "classnames";


interface NavItem {
    Title: string
    OnClick?: () => void
    Disable?: boolean
    Href?: string
}

export function Header(): JSX.Element {


    return <header className={"header"}>
        <Container className={"header__box"}>
            <Image
                src={logoURl} alt={"logotype"}
                className={"header__logo"}
            />
            <NavList />
        </Container>
    </header>
}


function NavList() {
    const items: NavItem[] = [
        {
            Title: "About",
            Href: "#aboutus"
        },
        {
            Title: "Programs",
            Href: "#technologies"
        },
        {
            Title: "Steps",
            Href: "#steps"
        },
        {
            Title: "Questions",
            Href: "#questions"
        },
        {
            Title: "Get in touch",
            Href: "#contactus"
        },
    ]

    return <div className="header__list">
        {
            items.map((item, i) => {
                return <a
                    key={i}
                    href={item.Href}
                    className={classNames(
                        "header__item",
                            "typo_p1",
                            item.Disable ? "disabled": "",
                    )}
                    onClick={item.OnClick}
                >
                    {item.Title}
                </a>
            })
        }
    </div>
}