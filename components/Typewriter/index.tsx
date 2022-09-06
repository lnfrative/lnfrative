import React, {useEffect, useRef, useState} from 'react'
import className from 'classnames'
import { useInView } from "react-intersection-observer";

// interfaces
import TypewriterProps from '../../interfaces/TypewriterProps'

// module
import { write } from './module'

function Typewriter(props: TypewriterProps) {
    const { ref, inView } = useInView()
    const contentRef = useRef<HTMLSpanElement>(null)
    const [blink, setBlink] = useState(false)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        if (inView) {
            const lapse = deleting ? 50 : 150
            const interval = setInterval(() => {
                write(props, contentRef, setBlink, setDeleting)
            }, lapse)
            return () => clearInterval(interval)
        }
    }, [blink, deleting, inView])

    return (
        <div ref={ref}>
            <span ref={contentRef} />
            <span
                className={className({
                    ['animate-typed-blink']: blink
                })}
            >
                |
            </span>
        </div>
    )
}

export default Typewriter