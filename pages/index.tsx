import type { NextPage } from 'next'

// components
import Header from "../components/Header"
import SectionCover from "../components/SectionCover"
import SectionPersonal from "../components/SectionPersonal"
import SectionServices from "../components/SectionServices"
import SectionSummary from "../components/SectionSummary"
import SectionPortfolio from "../components/SectionPortfolio"

const Home: NextPage = () => {
    return (
        <main>
            <Header />
            <SectionCover />
            <SectionPersonal />
            <SectionServices />
            <SectionSummary />
            <SectionPortfolio />
        </main>
    )
}

export default Home