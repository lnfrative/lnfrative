import React from "react"
import Image from "next/image"
import logoLight from "../../images/logo_light.svg"
import { useInView } from "react-intersection-observer"
import className from "classnames"
import { GitHub, Twitter, Facebook, YouTube } from "@mui/icons-material"
import useScreenStore from "../../hooks/useScreenStore"
import { moveScroll } from "./module"

function Header() {
    const screen = useScreenStore()
    const { ref, inView } = useInView({
        rootMargin: '100px'
    })
    return (
        <header ref={ref} className="transition-all ease-in delay-500">
            <nav className={className(
                'w-full z-30 text-white pl-5 pr-5',
                {
                    ['absolute']: inView,
                    ['fixed animate-slide-down bg-black']: !inView,
                },
            )}>
                <div className="flex items-center justify-between px-3">
                    <h1 className="w-2/12">
                        <Image src={logoLight} alt="infrative"></Image>
                    </h1>

                    <div className="w-8/12 hidden items-center justify-center xl:flex">
                        <ul className="flex">
                            <li>
                                <a
                                    onClick={moveScroll("cover")}
                                    className={className('p-5 flex justify-center items-center', {
                                        ['text-primary-light :dark:text-primary-dark']: screen.sectionInView === 0
                                    })}
                                >
                                    Me
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={moveScroll("personal")}
                                    className={className('p-5 flex justify-center items-center', {
                                        ['text-primary-light :dark:text-primary-dark']: screen.sectionInView === 1
                                    })}
                                >
                                    Personal
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={moveScroll("services")}
                                    className={className('p-5 flex justify-center items-center', {
                                        ['text-primary-light :dark:text-primary-dark']: screen.sectionInView === 2
                                    })}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={moveScroll("summary")}
                                    className={className('p-5 flex justify-center items-center', {
                                        ['text-primary-light :dark:text-primary-dark']: screen.sectionInView === 3
                                    })}
                                >
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={moveScroll("portfolio")}
                                    className={className('p-5 flex justify-center items-center', {
                                        ['text-primary-light :dark:text-primary-dark']: screen.sectionInView === 4
                                    })}
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-2/12 flex justify-end">
                        <ul className="flex">
                            <li className="p-5">
                                <a rel="noreferrer" target="_blank" href="https://github.com/lnfrative/lnfrative">
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
