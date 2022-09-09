import React, { useMemo } from "react"
import GroupValueProps from "../../interfaces/GroupValueProps"
import numberFormatter from "../../helpers/numberFormatter"

function GroupValue(props: GroupValueProps) {
    const formattedValue = useMemo(() => numberFormatter(props.value, 0, " "), [props.value])
    return (
        <div
            className="text-center"
        >
            <div
                className="text-5xl font-medium text-attenuated-light dark:text-attenuated-dark"
            >
                <span>{formattedValue.integer}</span>
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