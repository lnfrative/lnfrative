import React from "react"
import Link from "next/link";
import styles from "./index.module.css"

function Linktree() {
    return (
        <div className={styles.container}>
            <a href="https://stative.app" className={styles.linkContainer}>
                Stative
            </a>
            <a href="https://dogecash.net" className={styles.linkContainer}>
                DogeCash
            </a>
            <a href="https://github.com/lnfrative" className={styles.linkContainer}>
                GitHub
            </a>
            <a href="https://www.youtube.com/channel/UCGCS2ZCnAKraBHda3UyGUCQ/playlists?view=1&sort=lad&flow=grid" className={styles.linkContainer}>
                Song lists
            </a>
            <a href="https://twitter.com/infrative" className={styles.linkContainer}>
                Twitter
            </a>
            <a href="/pgp" className={styles.linkContainer}>
                PGP
            </a>
        </div>
    )
}

export default Linktree