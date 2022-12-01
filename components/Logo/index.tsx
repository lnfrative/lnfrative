import React from 'react'
import Image from 'next/image'
import avatar from '../../images/avatar_navidad.jpg'

function Logo() {
    return (
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden m-auto">
            <Image className="object-contain object-center" src={avatar} />
        </div>
    )
}

export default Logo
