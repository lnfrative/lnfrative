import type { NextPage } from 'next'
import Head from 'next/head'

// page
import Resume from "./resume"

// components
import Bio from "../components/Bio"
import Linktree from "../components/Linktree"

import styles from '../styles/Home.module.css'

// TODO: Redesign linktree.
// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//         <Head>
//             <title>Infrative | Linktree</title>
//             <meta name="description" content="Computer science student and software developer." />
//             <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
//         </Head>
//         <Bio />
//         <Linktree />
//     </div>
//   )
// }

export default Resume
