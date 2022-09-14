import React from "react"
import className from "classnames"
import ListDescriptionProps from "../../interfaces/ListDescriptionProps"

function ListDescription(props: ListDescriptionProps) {
    return (
        <>
            {props.descriptions.map(({ title, description, highlight }, i) => (
                <div
                    key={title}
                    className={className(
                        "text-content-light dark:text-content-dark text-lg pt-3 pb-3 flex justify-between",
                        "lg:block",
                        {
                            ["border-b border-attenuated-thin-light dark:border-attenuated-thin-dark"]: i !== props.descriptions.length - 1
                        }
                    )}
                >
                    <span className="font-semibold mr-2.5">
                        {title}:
                    </span>
                    <span
                        className={className({
                            ["text-primary-light"]: highlight
                        })}
                    >
                        {description}
                    </span>
                </div>
            ))}
        </>
    )
}

export default ListDescription
