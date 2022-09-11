import React, {PropsWithChildren, useEffect} from "react"
import { useInView } from "react-intersection-observer"
import SectionProps from "../../interfaces/SectionProps"
import useStoreDispatch from "../../hooks/useStoreDispatch"
import { setSectionInView } from "../../store/screen"

function Section(props: PropsWithChildren<SectionProps>) {
    const dispatch = useStoreDispatch()
    const { ref, inView } = useInView({
        threshold: 0.4
    })

    useEffect(() => {
        if (inView) {
            dispatch(setSectionInView(props.index))
        }
    }, [inView])

    return (
        <section ref={ref} id={props.id} className="flex justify-center pt-20 pb-20">
            <div className="max-w-screen-xl flex-1">
                { props.children }
            </div>
        </section>
    )
}

export default Section