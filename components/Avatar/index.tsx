import Image from 'next/image'
import ImageAvatar from '../../images/avatar.webp'
import ImageAvatarChristmas from '../../images/avatar_christmas.webp'
import { useMemo } from 'react'
import moment from 'moment'

function Avatar() {
    const currentMonth = useMemo(() => moment().month(), [])
    return (
        <div
            className="
                w-[200px] h-[200px] rounded-full overflow-hidden m-auto select-none
                border-solid border-2 border-black
                hover:opacity-80 hover:cursor-pointer transition-all ease-in active:opacity-100
            "
        >
            {currentMonth === 11 && (
                <Image unoptimized={true} priority={true} src={ImageAvatarChristmas} alt="Infrative" />
            )}
            {currentMonth !== 11 && (
                <Image unoptimized={true} priority={true} src={ImageAvatar} alt="Infrative" />
            )}
            
        </div>
    )
}

export default Avatar
