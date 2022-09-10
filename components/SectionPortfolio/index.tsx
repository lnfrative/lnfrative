import React from "react"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay";

function SectionPortfolio() {
    return (
        <div className="bg-neutral-light dark:bg-neutral-dark">
            <Section id="Portfolio" index={4}>
                <TitleOverlay primary="My work" secondary="Portfolio" />
            </Section>
        </div>
    )
}

export default SectionPortfolio