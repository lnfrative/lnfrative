import React, {useMemo} from "react"
import Section from "../Section"

function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), [])
    return (
        <footer className="flex justify-center pt-20 pb-20">
            <div className="max-w-screen-xl flex-1 text-center text-content-light dark:text-content-dark">
                <p className="text-lg">
                    <span>Copyright ©</span>
                    {" "}
                    <span>{currentYear}</span>
                    {" "}
                    <a className="text-primary-light dark:text-primary-dark" href="https://github.com/lnfrative">Infrative</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
