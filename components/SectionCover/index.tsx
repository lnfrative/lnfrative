import React, {useEffect, useRef} from 'react'
import { startScrollObserver } from './module';

// components
import GroupAvatar from '../GroupAvatar'

function SectionCover() {
    const coverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        startScrollObserver(coverRef)
    }, [])

    return (
        <section id="cover" className="min-h-screen relative">
            <div
                className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-60"
            ></div>
            <div
                ref={coverRef}
                className="min-h-[inherit] z-0 bg-hero-cover bg-fixed bg-cover bg-no-repeat bg-center absolute top-0 left-0 h-full w-full"
            ></div>
            <div className="relative pt-20 pb-20 z-20 min-h-screen flex">
                <div className="m-auto">
                    <GroupAvatar />
                </div>
            </div>
        </section>
    )
}

export default SectionCover