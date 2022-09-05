import { fromEvent } from 'rxjs'
import { RefObject } from "react";

export function startScrollObserver(ref: RefObject<HTMLDivElement>) {
    const scrollEvent = fromEvent(document, 'scroll')
    scrollEvent.subscribe(() => {
        const { scrollY } = window
        if (scrollY < 1200 && ref.current) {
            ref.current.style.backgroundPosition = `center ${-window.scrollY / 2.3}px`
        }
    })
}