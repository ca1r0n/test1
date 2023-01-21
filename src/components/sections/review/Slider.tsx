import {useState} from "react";
import classNames from "classnames";
import {Card} from "../../ui/card/Card";
import Image from "next/image";
import SliderBtnLeftUrl from "../../../../public/images/svg/SliderBtn.svg";

export interface SliderProps {
    Slides: {
        ImageUrl: string
        Title: string
        Text: string
    }[]
}

export function Slider(props: SliderProps) {
    const [active, setActive] = useState(0)

    const onPrev = () => {
        setActive(prev => {
            if (prev - 1 < 0) {
                return props.Slides.length - 1
            }
            return prev - 1
        })
    }

    const onNext = () => {
        setActive(prev => {
            if (prev + 1 == props.Slides.length) {
                return 0
            }
            return prev + 1
        })
    }

    return <div className="slider">
        <div className="slider__left">
            <h4>
                {props.Slides[active].Title}
            </h4>
            <p>
                {props.Slides[active].Text}
            </p>
        </div>
        <div className="slider__right">
            <SliderPanel
                Current={active + 1}
                Max={props.Slides.length}
                OnNext={onNext}
                OnPrev={onPrev}
            />
            <div className="slider__slides">
                {props.Slides.map((slide, i) => {
                    return <Slide
                        ImageUrl={slide.ImageUrl}
                        IsActive={i == active}
                        key={i}
                    />
                })}
            </div>
        </div>

        {/*for slides clip path*/}
        <svg width="0" height="0">
            <clipPath id="slide-clip-path" clipPathUnits="objectBoundingBox">
                <path
                    d="M1,0.04 L1,0.908 C1,0.918,0.991,0.928,0.976,0.935 L0.866,0.987 C0.849,0.995,0.825,1,0.799,1 H0.091 C0.041,1,0,0.982,0,0.96 L0,0.04 C0,0.018,0.041,0,0.091,0 H0.909 C0.959,0,1,0.018,1,0.04 M0.995,0.908 C0.995,0.918,0.986,0.927,0.972,0.934 L0.862,0.986 C0.846,0.993,0.823,0.998,0.799,0.998 H0.091 C0.044,0.998,0.005,0.981,0.005,0.96 L0.005,0.04 C0.005,0.019,0.044,0.002,0.091,0.002 H0.909 C0.956,0.002,0.995,0.019,0.995,0.04 L0.995,0.908"></path>
            </clipPath>
        </svg>
    </div>
}

interface SlideProps {
    ImageUrl: string
    IsActive: boolean
}

function Slide(props: SlideProps) {
    return <div
        className={classNames(
            "slider__slide",
            props.IsActive ? "slider__slide--active" : ""
        )}
    >
        <div
            className="slider__image"
            style={{
                backgroundImage: `url("${props.ImageUrl}")`
            }}
        ></div>
    </div>
}

interface SliderPanelProps {
    OnNext?: () => void
    OnPrev?: () => void
    Current:  number
    Max: number
}

function SliderPanel(props: SliderPanelProps) {
    return <div className={"slider-panel"}>
        <div className="slider-panel__status">
            <h4 className="slider-panel__cur">{props.Current}/</h4>
            <p className="slider-panel__max">{props.Max}</p>
        </div>
        <div className="slider-panel__btns">
            <SlideBtn OnClick={props.OnPrev}/>
            <SlideBtn OnClick={props.OnNext} IsRight/>
        </div>
    </div>
}

interface SlideBtnProps {
    IsRight?: boolean
    OnClick?: () => void
}

function SlideBtn(props: SlideBtnProps) {
    return <Card
        className={"slider-btn"}
        onClick={props.OnClick}
    >
        <Image
            loading={"lazy"}
            src={SliderBtnLeftUrl}
            alt={"slider_btn"}
            className={classNames(
                "slider-btn__image",
                props.IsRight ? "slider-btn__image--reverse" : ""
            )}
        />
    </Card>
}