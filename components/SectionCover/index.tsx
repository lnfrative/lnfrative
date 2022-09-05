import React, {useEffect, useRef} from 'react'
import { startScrollObserver } from './module';

function SectionCover() {
    const coverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        startScrollObserver(coverRef)
    }, [])

    return (
        <section id="cover" className="min-h-screen relative">
            <div
                ref={coverRef}
                className="min-h-[inherit] bg-hero-cover bg-fixed bg-cover bg-no-repeat bg-center absolute top-0 left-0 h-full w-full"
            ></div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
            ></div>
        </section>
    )
}

export default SectionCover