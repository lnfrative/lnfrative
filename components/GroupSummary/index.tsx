import React from "react"
import GroupSummaryProps from "../../interfaces/GroupSummaryProps"

function GroupSummary(props: GroupSummaryProps) {
    return (
        <div
            className="p-5 bg-black text-white rounded-lg"
        >
            <span className="inline-block pl-2 pr-2 pt-1 pb-1 bg-primary-light dark:bg-primary-dark rounded-xl text-sm">
                {props.period}
            </span>
            <div className="mt-4 mb-2 text-2xl font-semibold">
                {props.title}
            </div>
            <div className="text-primary-light dark:text-primary-dark font-medium text-lg">
                {props.entity}
            </div>
            <p className="text-lg mt-4 text-attenuated-light dark:text-attenuated-dark">
                {props.description}
            </p>
        </div>
    )
}

export default GroupSummary