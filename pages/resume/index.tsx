import type { NextPage } from 'next'

// components
import Header from '../../components/Header'
import SectionCover from "../../components/SectionCover";

const Resume: NextPage = () => {
    return (
        <main>
            <Header />
            <SectionCover />
            <div className="w-full h-screen"></div>
        </main>
    )
}

export default Resume