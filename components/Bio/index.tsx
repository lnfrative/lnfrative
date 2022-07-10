import React from "react"
import Logo from "../Logo"
import styles from "./index.module.css"

function Bio() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Logo />
                <p className={styles.description}>Howdy.</p>
            </div>
        </div>
    )
}

export default Bio