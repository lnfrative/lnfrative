import React from 'react'
import Image from 'next/image'
import avatar from '../../images/avatar.jpeg'

function Logo() {
    return (
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden m-auto">
            <Image className="object-contain object-center" src={avatar} />
        </div>
    )
}

export default Logo