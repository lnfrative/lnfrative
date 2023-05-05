// import React, { useMemo } from 'react'
import Image from 'next/image'
// import moment from "moment"
// import ImageAvatarNavidad from '../../images/avatar_navidad.jpg'
import ImageAvatar from '../../images/avatar.jpg'

function Avatar() {
    // const currentMonth = useMemo(() => moment().month(), [])

    // need to find a new hristmas avatar
    // return (
    //     <div className="w-[200px] h-[200px] rounded-full overflow-hidden m-auto">
    //         {currentMonth === 11 && (
    //             <Image className="object-contain object-center" src={ImageAvatarNavidad} alt="Avatar navideño" />
    //         )}
    //         {currentMonth !== 11 && (
    //             <Image className="object-contain object-center" src={ImageAvatar} alt="Avatar" />
    //         )}
    //     </div>
    // )
    return (
        <div
            className="
                w-[200px] h-[200px] rounded-full overflow-hidden m-auto select-none
                border-solid border-2 border-black
                hover:opacity-80 hover:cursor-pointer transition-all ease-in active:opacity-100
            "
        >
            <Image className="object-contain object-center" src={ImageAvatar} alt="Avatar" />
        </div>
    )
}

export default Avatar
