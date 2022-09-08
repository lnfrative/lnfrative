import React, {useEffect, useRef} from 'react'
import { startScrollObserver } from './module';

// components
import GroupAvatar from '../GroupAvatar'
import Typewriter from "../Typewriter";

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
                className="min-h-[inherit] z-0 bg-hero-cover bg-fixed bg-cover bg-center bg-no-repeat absolute top-0 left-0 h-full w-full"
            ></div>
            <div className="relative pt-20 pb-20 z-20 min-h-screen flex">
                <div className="m-auto text-center">
                    <GroupAvatar />
                    <h2 className="text-6xl mt-10 mb-10 text-white font-semibold">
                        <Typewriter
                            titles={[
                                "I'm a Developer",
                                "MariaDB > MySQL",
                                "NoSQL ~ SQL",
                                "I'm a Freelancer",
                                "GraphQL > REST",
                                "I love Node.js",
                                "I'm a Junior DevOps",
                                "TS > JS",
                                "Tailwind Lover"
                            ]}
                        />
                    </h2>
                    <p className="text-2xl text-white font-medium">based in Guayaquil, Ecuador.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionCover