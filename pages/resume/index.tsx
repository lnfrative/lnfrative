import type { NextPage } from 'next'

// components
import Header from "../../components/Header"
import SectionCover from "../../components/SectionCover"
import SectionPersonal from "../../components/SectionPersonal"

const Resume: NextPage = () => {
    return (
        <main>
            <Header />
            <SectionCover />
            <SectionPersonal />
        </main>
    )
}

export default Resume