import React from "react"
import className from "classnames"
import PercentBarProps from "../../interfaces/PercentBarProps"

function PercentBar(props: PercentBarProps) {
    return (
        <div className="flex">
            <div
                className={className(
                    "h-[8px]",
                    "bg-primary-light dark:bg-primary-dark",
                    `w-[${props.value}%]`
                )}
            />
        </div>
    )
}

export default PercentBar