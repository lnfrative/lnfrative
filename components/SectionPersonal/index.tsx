import React, {useMemo} from "react"
import className from "classnames"
import moment from "moment"
import TitleOverlay from "../TitleOverlay"
import Section from "../Section"
import ListDescription from "../ListDescription"
import ListGroupValue from "../ListGroupValue"

const AVERAGE_CODE_LINES_PER_MONTH = 1950

function SectionPersonal() {
    const { age, exp, codeLines } = useMemo(() => ({
        age: moment().diff("1998-11-21", "years").toString(),
        exp: moment().diff("2020-03-10", "years"),
        codeLines: moment().diff("2020-03-10", "months") * AVERAGE_CODE_LINES_PER_MONTH
    }), [])

    return (
        <Section index={1} id="personal">
            <TitleOverlay primary="About me" secondary="Personal" />
            <div className={className(
                "mt-20 flex flex-col text-center items-center",
                "lg:flex-row lg:text-left lg:items-start"
            )}>
                <div className={className(
                    "text-content-light dark:text-content-dark flex-1 mb-20",
                    "lg:mr-20 lg:mb-0"
                )}>
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

                <div className={className(
                    "min-w-[390px] w-full",
                    "lg:w-auto"
                )}>
                    <ListDescription
                        descriptions={[
                            { title: "Name", description: "Christopher Díaz" },
                            { title: "Email", description: "nealthmc@gmail.com", highlight: true },
                            { title: "Age", description: age },
                            { title: "From", description: "Guayaquil, Ecuador" },
                        ]}
                    />
                </div>
            </div>
            <div className="mt-20">
                <ListGroupValue
                    groupValues={[
                        { title: "Years Experience", value: exp, sign: "+" },
                        { title: "Lines of Code", value: codeLines, sign: "+" },
                        { title: "Projects Worked", value: 4 },
                    ]}
                />
            </div>
         </Section>
    )
}

export default SectionPersonal
