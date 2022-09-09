import React from "react"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay"

function SectionServices() {
    return (
        <div className="bg-neutral-light dark:bg-neutral-dark">
            <Section index={2} id="services">
                <TitleOverlay primary="What I do?" secondary="Services" />
            </Section>
        </div>
    )
}

export default SectionServices