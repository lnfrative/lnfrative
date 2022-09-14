import React, {useEffect, useRef} from 'react'
import { useInView } from "react-intersection-observer"
import useStoreDispatch from "../../hooks/useStoreDispatch"
import { setSectionInView } from "../../store/screen"
import { startScrollObserver } from "./module"
import cover from "../../images/cover.jpeg"

// components
import GroupAvatar from '../GroupAvatar'
import Typewriter from "../Typewriter";

function SectionCover() {
    const dispatch = useStoreDispatch()
    const { ref, inView } = useInView({
        threshold: 0.75
    })
    const coverRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        startScrollObserver(coverRef)
    }, [])

    useEffect(() => {
        if (inView) {
            dispatch(setSectionInView(0))
        }
    }, [inView])

    return (
        <section ref={ref} id="cover" className="min-h-screen relative">
            <div
                className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-60"
            ></div>
            <div
                ref={coverRef}
                style={{
                    backgroundImage: `url(${cover.src})`
                }}
                className="min-h-[inherit] z-0 bg-fixed bg-cover bg-no-repeat absolute top-0 left-0 h-full w-full"
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
                                "Tailwind Lover",
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
