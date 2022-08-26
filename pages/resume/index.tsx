import type { NextPage } from 'next'
import cover from '../../images/hero_cover.jpg'

const Resume: NextPage = () => {
    return (
        <div className="min-h-screen">
            <div
                style={{
                    // TODO: Remove hardcoded
                    backgroundImage: `url(${cover.src})`,
                }}
                className="min-h-[inherit] bg-fixed bg-no-repeat bg-center bg-cover"
            ></div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
            ></div>
            <div className="w-full h-screen"></div>
        </div>
    )
}

export default Resume