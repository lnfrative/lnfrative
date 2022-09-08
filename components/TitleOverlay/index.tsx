import React from "react"
import className from "classnames"

interface TitleOverlayProps {
    primary: string,
    secondary: string,
}

function TitleOverlay(props: TitleOverlayProps) {
    return (
        <div
            className="relative"
        >
            <h2 className={
                className(
                    "text-attenuated-light dark:text-attenuated-dark",
                    "text-9xl font-semibold opacity-10 text-center"
                )
            }>
                {props.secondary.toUpperCase()}
            </h2>
            <p
                className={className(
                    "text-content-light dark:text-content-dark",
                    "absolute  top-0 left-0 w-full h-full flex items-center justify-center",
                    "text-4xl font-semibold",
                )}
            >
                {props.primary}
            </p>
        </div>
    )
}

export default TitleOverlay