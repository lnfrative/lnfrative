import React from "react"
import GroupAvatar from "../GroupAvatar";
import styles from "./index.module.css"

function Bio() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <GroupAvatar />
            </div>
        </div>
    )
}

export default Bio