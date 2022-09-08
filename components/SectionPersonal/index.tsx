import React from "react"
import TitleOverlay from "../TitleOverlay"
import Section from "../Section"

function SectionPersonal() {
    return (
        <Section id="personal">
            <TitleOverlay primary="About me" secondary="Personal" />
            <div className="text-content-light dark:text-content-dark mt-20">
                <h3
                    className="font-semibold text-2xl mb-4"
                >
                    I&apos;m <span className="text-primary-light dark:text-primary-dark">Christopher Díaz</span>, a Junior Software Engineer.
                </h3>

                <div className="text-attenuated-light dark:text-attenuated-dark">
                    <p className="mb-4 leading-relaxed text-lg">I started in the field of development in 2013, playing short pieces of PHP code to manipulate a script called PHPost, which was a replica of the then popular Argentinian microblogging site called Taringa!.</p>
                    <p className="mb-4 leading-relaxed text-lg">I moved to the creation and sale of sites with Wordpress in 2014 until 2015, the year in which I dedicated myself to Social Media and the creation of content on platforms such as Facebook and YouTube. Until 2017, I got a decent video editing experience, mainly in Adobe Premiere.</p>
                    <p className="mb-4 leading-relaxed text-lg">Since 2018 my learning in terms of programming languages such as Python, Java, TS & JS was fundamentally theoretical until 2020, the year in which I started working both in software development and server maintenance.</p>
                </div>
            </div>
         </Section>
    )
}

export default SectionPersonal