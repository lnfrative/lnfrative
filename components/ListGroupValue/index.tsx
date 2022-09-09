import React from "react"
import className from "classnames"
import ListGroupValueProps from "../../interfaces/ListGroupValueProps"
import GroupValue from "../GroupValue"

function ListGroupValue(props: ListGroupValueProps) {
    return (
        <div
            className="flex"
        >
            {props.groupValues.map((groupValue, i) => {
                return (
                    <div
                        key={groupValue.title}
                        className={className(
                            "flex-1 border-attenuated-thin-light dark:border-attenuated-thin-dark",
                            {
                                ["border-r"]: i !== props.groupValues.length - 1
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