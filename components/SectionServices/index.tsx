import React from "react"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay"
import GroupDescription from "../GroupDescription"

import { Web, ManageHistory, Storage, Code } from "@mui/icons-material"

function SectionServices() {
    return (
        <div className="bg-neutral-light dark:bg-neutral-dark">
            <Section index={2} id="services">
                <TitleOverlay primary="What I do?" secondary="Services" />

                <div className="flex mt-20">
                    <div className="flex-1 mr-20">
                        <GroupDescription
                            title="Frontend Development"
                            description="Building and maintaining scalable web applications using development frameworks with a strong focus on components as pieces of constituent code."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <Web color="inherit" fontSize="inherit" />
                                </div>
                            )}
                        />

                        <div className="mt-20" />

                        <GroupDescription
                            title="Server Maintenance"
                            description="Installation and maintenance of the necessary services to successfully run and serve applications, such as DB, HTTP server, containerization through Docker."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <Storage color="inherit" fontSize="inherit" />
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex-1">
                        <GroupDescription
                            title="Continuous Integration"
                            description="Creation of CI/CD pipelines using Jenkins and GitHub Actions for rapid software deployment and upgrades to both production and development environments."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <ManageHistory color="inherit" fontSize="inherit" />
                                </div>
                            )}
                        />

                        <div className="mt-20" />

                        <GroupDescription
                            title="Backend Development"
                            description="REST API development, database management through ORM using Laravel, Symfony or AdonisJS for NodeJS environments."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <Code color="inherit" fontSize="inherit" />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default SectionServices
