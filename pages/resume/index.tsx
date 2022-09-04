import type { NextPage } from 'next'
import Image from 'next/image'
import cover from '../../images/hero_cover.jpg'
import logoLight from '../../images/logo_light.svg'

const Resume: NextPage = () => {
    return (
        <main>
            <header className="transition-all ease-in delay-500">
                <nav className="absolute w-full z-30 text-white">
                    <div className="flex items-center justify-between px-3">
                        <div className="w-2/12">
                            <Image src={logoLight}></Image>
                        </div>

                        <div className="w-8/12 flex items-center justify-center">
                            <ul className="flex">
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Cover</a>
                                </li>
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Personal</a>
                                </li>
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Services</a>
                                </li>
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Resume</a>
                                </li>
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Portfolio</a>
                                </li>
                                <li>
                                    <a className="h-[70px] p-5 flex justify-center items-center">Hire</a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-2/12 flex justify-end">
                            Icons
                        </div>
                    </div>
                </nav>
            </header>
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