import React from "react"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay"
import Gallery from "../Gallery"

import dogecOverview from "../../images/portfolio/dogec-app/dogec_overview.png"
import dogecSite from "../../images/portfolio/dogec-site/dogec_site.jpg"
import gravySite from "../../images/portfolio/gravyswap/site.jpg"
import ohplayPlatform from "../../images/portfolio/ohplay/ohplay.png"

function SectionPortfolio() {
    return (
        <div className="bg-neutral-light dark:bg-neutral-dark">
            <Section id="Portfolio" index={4}>
                <TitleOverlay primary="My work" secondary="Portfolio" />
                <div className="mt-20">
                    <Gallery
                        images={[
                            {
                                src: dogecOverview,
                                title: "Dogecash Dashboard"
                            },
                            {
                                src: dogecSite,
                                title: "Dogecash Site"
                            },
                            {
                                src: gravySite,
                                title: "Gravyswap DEX"
                            },
                            {
                                src: ohplayPlatform,
                                title: "OhPlay Dashboard"
                            }
                        ]}
                    />
                </div>
            </Section>
        </div>
    )
}

export default SectionPortfolio
