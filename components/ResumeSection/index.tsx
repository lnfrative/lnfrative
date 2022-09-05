import React, { PropsWithChildren } from 'react'
import ResumeSectionProps from "../../interfaces/ResumeSectionProps";

function ResumeSection(props: PropsWithChildren<ResumeSectionProps>) {
    return (
        <section id={props.id} className="max-w-screen-xl">
            { props.children }
        </section>
    )
}

export default ResumeSection