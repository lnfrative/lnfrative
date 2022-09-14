import type { NextPage } from "next"

// components
import Header from "../components/Header"
import SectionCover from "../components/SectionCover"
import SectionPersonal from "../components/SectionPersonal"
import SectionServices from "../components/SectionServices"
import SectionSummary from "../components/SectionSummary"
import SectionPortfolio from "../components/SectionPortfolio"
import Footer from "../components/Footer"
import Head from "next/head"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Infrative</title>
                <meta name="description" content="I'm Christopher Díaz, a computer science student at ESPOL and a freelance software developer."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://infrative.com"/>
                <meta property="og:title" content="Infrative" />
                <meta property="og:description" content="I'm Christopher Díaz, a computer science student at ESPOL and a freelance software developer."/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="Infrative"/>
                <meta property="twitter:description" content="I'm Christopher Díaz, a computer science student at ESPOL and a freelance software developer."/>
            </Head>
            <main>
                <Header />
                <SectionCover />
                <SectionPersonal />
                <SectionServices />
                <SectionSummary />
                <SectionPortfolio />
                <Footer />
            </main>
        </>
    )
}

export default Home
