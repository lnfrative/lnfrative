import type { NextPage } from 'next'

// components
import Header from "../components/Header"
import SectionCover from "../components/SectionCover"
import SectionPersonal from "../components/SectionPersonal"
import SectionServices from "../components/SectionServices"

const Home: NextPage = () => {
    return (
        <main>
            <Header />
            <SectionCover />
            <SectionPersonal />
            <SectionServices />
        </main>
    )
}

export default Home