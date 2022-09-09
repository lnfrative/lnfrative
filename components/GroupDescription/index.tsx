import React from "react"
import GroupDescriptionProps from "../../interfaces/GroupDescriptionProps"

function GroupDescription(props: GroupDescriptionProps) {
    return (
        <div className="flex">
            <div className="p-4 bg-paper-light dark:bg-paper-dark rounded-lg flex self-start justify-center items-center">
                {props.imageElement}
            </div>

            <div className="ml-5">
                <h3 className="mb-2.5 text-2xl font-semibold text-content-light dark:text-content-dark">{props.title}</h3>
                <div className="text-lg text-attenuated-light dark:text-attenuated-dark">{props.description}</div>
            </div>
        </div>
    )
}

export default GroupDescription