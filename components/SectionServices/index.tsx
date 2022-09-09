import React from "react"
import Section from "../Section"
import TitleOverlay from "../TitleOverlay"
import GroupDescription from "../GroupDescription"

import { Web } from "@mui/icons-material"

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
                            title="Frontend Development"
                            description="Building and maintaining scalable web applications using development frameworks with a strong focus on components as pieces of constituent code."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <Web color="inherit" fontSize="inherit" />
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex-1">
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
                            title="Frontend Development"
                            description="Building and maintaining scalable web applications using development frameworks with a strong focus on components as pieces of constituent code."
                            imageElement={(
                                <div className="text-primary-light dark:text-primary-dark text-5xl">
                                    <Web color="inherit" fontSize="inherit" />
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