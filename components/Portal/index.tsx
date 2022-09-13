import React, { PropsWithChildren, useEffect, useState } from "react"
import { createPortal } from "react-dom";

function Portal(props: PropsWithChildren) {
    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(true)
    }, [])

    if (!render) return null
    return createPortal(props.children, document.getElementById("overlay") as HTMLElement)
}

export default Portal
