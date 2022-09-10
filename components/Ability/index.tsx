import React from "react"
import AbilityProps from "../../interfaces/AbilityProps"
import PercentBar from "../PercentBar"

function Ability(props: AbilityProps) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2.5 font-medium text-content-dark dark:text-content-dark text-lg">
                <span>{props.title}</span>
                <span>{props.value}%</span>
            </div>
            <PercentBar value={props.value} />
        </div>
    )
}

export default Ability