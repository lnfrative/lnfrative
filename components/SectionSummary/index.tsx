import React from "react"
import className from "classnames"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay"
import GroupSummary from "../GroupSummary"
import Ability from "../Ability"

function SectionSummary() {
    return (
        <Section id="summary" index={3}>
            <TitleOverlay primary="Resume" secondary="Summary" />

            <div className={className(
                "flex mt-20 flex-col",
                "lg:flex-row"
            )}>
                <div className={className(
                    "flex-1 mb-20",
                    "lg:mr-10 lg:mb-0"
                )}>
                    <h3 className="font-semibold text-2xl mb-10 text-content-light dark:text-content-dark">My education</h3>

                    <GroupSummary
                        period="2022 - present"
                        entity="ESPOL"
                        title="Computer Engineering"
                        description="Finally I decided to study the vocation to which I have dedicated myself professionally."
                    />

                    <div className="mt-10" />

                    <GroupSummary
                        period="2019 - 2020"
                        entity="ESPOL"
                        title="Degree in Mathematics"
                        description="In my short time as a math student I was instructed in discrete analysis, multivariable calculus, differential equations, and mathematical reasoning."
                    />

                    <div className="mt-10" />

                    <GroupSummary
                        period="2018 - 2019"
                        entity="ESPOL"
                        title="Degree in Economy"
                        description="I enrolled in college out of a personal interest in economics and to understand how the world works. I got a solid foundation in both mathematics and economic theory."
                    />
                </div>

                <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-10 text-content-light dark:text-content-dark">My experience</h3>

                    <GroupSummary
                        period="2021 - 2022"
                        entity="Dogecash LLC"
                        title="Frontend & DevOps Engineer"
                        description="I developed the web application of the company's main service and multiple sites, using React and NextJS. I was in charge of the administration of the servers and the maintenance of the CI/CD processes using Jenkins and GitHub Actions and Docker. I had extensive experience in managing NodeJS applications served with PM2 served through proxy with Nginx. I gained experience creating highly available databases with replicate slaves with MySQL, MariaDB and MongoDB."
                    />

                    <div className="mt-10" />

                    <GroupSummary
                        period="2020 - 2021"
                        entity="Attach"
                        title="React Frontend Developer"
                        description="Frontend developer based entirely on React. I was in charge of making the design implementations and the connections with the API of the service."
                    />

                    <div className="mt-10" />

                    <GroupSummary
                        period="2020 - 2020"
                        entity="OhPlay"
                        title="Fullstack Developer"
                        description="I was in charge of the frontend development of the web application and the API Rest backend development. I made several implementations with third-party APIs, such as BunnyCDN for file hosting and I developed a video processor with JavaFX and FFmpeg to make them compatible with HLS. I made preparations to develop the mobile application of the service with Flutter."
                    />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="font-semibold text-2xl mb-10 text-content-light dark:text-content-dark">My Skills</h3>

                <div className={className(
                    "grid grid-cols-1 gap-10",
                    "md:grid-cols-2"
                )}>
                    <Ability title="HTML" value={95} />
                    <Ability title="CSS" value={90} />
                    <Ability title="JS & TS" value={95} />
                    <Ability title="React.js" value={95} />
                    <Ability title="Vue" value={60} />
                    <Ability title="PHP" value={70} />
                    <Ability title="Prisma" value={80} />
                    <Ability title="Nginx" value={70} />
                    <Ability title="Flutter" value={55} />
                    <Ability title="Python" value={75} />
                    <Ability title="Angular" value={55} />
                    <Ability title="Docker & Compose" value={65} />
                    <Ability title="Kubernetes" value={10} />
                    <Ability title="Laravel" value={80} />
                    <Ability title="AdonisJS" value={75} />
                    <Ability title="Java" value={60} />
                    <Ability title="Jenkins" value={55} />
                </div>
            </div>
        </Section>
    )
}

export default SectionSummary
