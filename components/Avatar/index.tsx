import React, { useMemo } from 'react'
import Image from 'next/image'
import moment from "moment"
import ImageAvatarNavidad from '../../images/avatar_navidad.jpg'
import ImageAvatar from '../../images/avatar.jpeg'

function Avatar() {
    const currentMonth = useMemo(() => moment().month(), [])

    return (
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden m-auto">
            {currentMonth === 11 && (
                <Image className="object-contain object-center" src={ImageAvatarNavidad} alt="Avatar navideño" />
            )}
            {currentMonth !== 11 && (
                <Image className="object-contain object-center" src={ImageAvatar} alt="Avatar" />
            )}
        </div>
    )
}

export default Avatar
