import React from 'react'
import Image from 'next/image'
import avatar from '../../images/avatar.jpeg'
import styles from './index.module.css'

function Logo() {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src={avatar} />
        </div>
    )
}

export default Logo