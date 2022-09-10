import React from "react"
import className from "classnames"
import PercentBarProps from "../../interfaces/PercentBarProps"

function PercentBar(props: PercentBarProps) {
    return (
        <div className="flex bg-attenuated-thin-light dark:bg-attenuated-thin-dark rounded-lg relative overflow-hidden">
            <div
                style={{
                    width: `${props.value}%`
                }}
                className={className(
                    "h-[8px]",
                    "bg-primary-light dark:bg-primary-dark",
                )}
            />
        </div>
    )
}

export default PercentBar