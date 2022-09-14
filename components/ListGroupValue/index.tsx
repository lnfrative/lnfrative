import React from "react"
import className from "classnames"
import ListGroupValueProps from "../../interfaces/ListGroupValueProps"
import GroupValue from "../GroupValue"
import classNames from "classnames"

function ListGroupValue(props: ListGroupValueProps) {
    return (
        <div
            className={className(
                "flex flex-col",
                "lg:flex-row"
            )}
        >
            {props.groupValues.map((groupValue, i) => {
                return (
                    <div
                        key={groupValue.title}
                        className={className(
                            "flex-1 mb-20",
                            "lg:mb-0 lg:border-attenuated-thin-light lg:dark:border-attenuated-thin-dark",
                            {
                                ["lg:border-r"]: i !== props.groupValues.length - 1
                            }
                        )}
                    >
                        <GroupValue {...groupValue} />
                    </div>
                )
            })}
        </div>
    )
}

export default ListGroupValue
