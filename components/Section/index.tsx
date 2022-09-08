import React, { PropsWithChildren } from "react"
import SectionProps from "../../interfaces/SectionProps"

function Section(props: PropsWithChildren<SectionProps>) {
    return (
        <section id={props.id} className="flex justify-center pt-20 pb-20">
            <div className="max-w-screen-xl flex-1">
                { props.children }
            </div>
        </section>
    )
}

export default Section