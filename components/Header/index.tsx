import React from 'react'
import Image from "next/image"
import logoLight from "../../images/logo_light.svg"
import { useInView } from 'react-intersection-observer'
import className from 'classnames'

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

                    <div className="w-8/12 flex items-center justify-center">
                        <ul className="flex">
                            <li>
                                <a href="#cover" className="h-[70px] p-5 flex justify-center items-center">Cover</a>
                            </li>
                            <li>
                                <a href="#personal" className="h-[70px] p-5 flex justify-center items-center">Personal</a>
                            </li>
                            <li>
                                <a href="#services" className="h-[70px] p-5 flex justify-center items-center">Services</a>
                            </li>
                            <li>
                                <a href="#resume" className="h-[70px] p-5 flex justify-center items-center">Resume</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="h-[70px] p-5 flex justify-center items-center">Portfolio</a>
                            </li>
                            <li>
                                <a href="#hire" className="h-[70px] p-5 flex justify-center items-center">Hire</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-2/12 flex justify-end">
                        Icons
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header