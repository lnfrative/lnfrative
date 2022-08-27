import type { NextPage } from 'next'
import cover from '../../images/hero_cover.jpg'

const Resume: NextPage = () => {
    return (
        <main>
            <section className="min-h-screen relative">
                <div
                    style={{
                        // TODO: Remove hardcoded
                        backgroundImage: `url(${cover.src})`,
                    }}
                    className="min-h-[inherit] bg-fixed bg-cover bg-no-repeat bg-center absolute top-0 left-0 h-full w-full"
                ></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
                ></div>
            </section>
            <div className="w-full h-screen"></div>
        </main>

    )
}

export default Resume