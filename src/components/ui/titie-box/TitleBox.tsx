interface TitleBox{
    title: string
    subtitle?: string
}

export function TitleBox(props: TitleBox) {
    return <>
        <h2 className={"title-box__title"}>
            {props.title}
        </h2>
        {!!props.subtitle && <p className={"title-box__subtitle"}>
            {props.subtitle}
        </p>}
    </>
}