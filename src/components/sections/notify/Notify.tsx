import {useAppSelector} from "../../../store";
import {useEffect, useState} from "react";
import classNames from "classnames";


export function Notify() {
    const newNotify = useAppSelector(state => state.notifyReducer)
    const [queue, setQueue] = useState<(NotifyMessageProps & {
        Id: number
    })[]>([])

    useEffect(() => {
        const id = Math.random() * 100

        if (newNotify.msg) {
            setQueue(state => [
                ...state,
                {
                    Id: id,
                    Message: newNotify.msg!.Message,
                    Status: newNotify.msg!.Status,
                }
            ])
        }

        setTimeout(() => {
            setQueue(state => state.filter(item => item.Id !== id))
        }, 5000)
    }, [newNotify.msg])


    return <div className={"notify"}>
        {queue.map((item) => {
            return <NotifyMessage key={item.Id} {...item} />
        })}
    </div>
}

interface NotifyMessageProps {
    Message: string
    Status: "ok" | "error"
    OnDelete?: () => void
}

function NotifyMessage(props: NotifyMessageProps) {
    return <div className={classNames(
        "notify__block",
        props.Status == "ok" ? "notify__block--success" : "notify__block--error"
    )}>
        <div className="notify__message">
            {props.Message}
        </div>
    </div>
}