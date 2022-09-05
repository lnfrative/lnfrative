import React from 'react'
import Image from "next/image"
import logoLight from "../../images/logo_light.svg"
import { useInView } from 'react-intersection-observer'
import className from 'classnames'
import { GitHub, Twitter, Facebook, YouTube } from '@mui/icons-material'

function Header() {
    const { ref, inView } = useInView({
        rootMargin: '100px'
    })
    return (
        <header ref={ref} className="transition-all ease-in delay-500">
            <nav className={className(
                'w-full z-30 text-white',
                {
                    ['absolute']: inView,
                    ['fixed animate-slideDown bg-black']: !inView,
                },
            )}>
                <div className="flex items-center justify-between px-3">
                    <div className="w-2/12">
                        <Image src={logoLight}></Image>
                    </div>

                    <div className="w-8/12 hidden items-center justify-center xl:flex">
                        <ul className="flex">
                            <li>
                                <a href="#cover" className="p-5 flex justify-center items-center">Cover</a>
                            </li>
                            <li>
                                <a href="#personal" className="p-5 flex justify-center items-center">Personal</a>
                            </li>
                            <li>
                                <a href="#services" className="p-5 flex justify-center items-center">Services</a>
                            </li>
                            <li>
                                <a href="#resume" className="p-5 flex justify-center items-center">Resume</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="p-5 flex justify-center items-center">Portfolio</a>
                            </li>
                            <li>
                                <a href="#hire" className="p-5 flex justify-center items-center">Hire me</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-2/12 flex justify-end">
                        <ul className="flex">
                            <li className="p-5">
                                <a rel="noreferrer" target="_blank" href="https://github.com/lnfrative">
                                    <GitHub />
                                </a>
                            </li>
                            <li className="p-5">
                                <a rel="noreferrer" target="_blank" href="https://twitter.com/infrative">
                                    <Twitter />
                                </a>
                            </li>
                            <li className="p-5">
                                <a rel="noreferrer" target="_blank" href="https://facebook.com/infrative">
                                    <Facebook />
                                </a>
                            </li>
                            <li className="p-5">
                                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCGCS2ZCnAKraBHda3UyGUCQ">
                                    <YouTube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header