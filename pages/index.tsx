import type { NextPage } from 'next'

// components
import Header from "../components/Header"
import SectionCover from "../components/SectionCover"
import SectionPersonal from "../components/SectionPersonal"
import SectionServices from "../components/SectionServices"
import SectionSummary from "../components/SectionSummary"

const Home: NextPage = () => {
    return (
        <main>
            <Header />
            <SectionCover />
            <SectionPersonal />
            <SectionServices />
            <SectionSummary />
        </main>
    )
}

export default Home