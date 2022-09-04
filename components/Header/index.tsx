import React from 'react'
import Image from "next/image";
import logoLight from "../../images/logo_light.svg";

function Header() {
    return (
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
    )
}

export default Header