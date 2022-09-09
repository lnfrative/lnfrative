import React from "react"
import GroupValueProps from "../../interfaces/GroupValueProps"

function GroupValue(props: GroupValueProps) {
    return (
        <div
            className="text-center"
        >
            <div
                className="text-5xl font-medium text-attenuated-light dark:text-attenuated-dark"
            >
                <span>{props.value}</span>
                <span>{props.sign}</span>
            </div>

            <p
                className="text-lg mt-2.5 text-content-light dark:text-content-dark"
            >
                {props.title}
            </p>
        </div>
    )
}

export default GroupValue