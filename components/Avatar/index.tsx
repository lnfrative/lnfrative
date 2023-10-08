import Image from 'next/image'
import ImageAvatar from '../../images/avatar.jpg'

function Avatar() {
    return (
        <div
            className="
                w-[200px] h-[200px] rounded-full overflow-hidden m-auto select-none
                border-solid border-2 border-black
                hover:opacity-80 hover:cursor-pointer transition-all ease-in active:opacity-100
            "
        >
            <Image priority src={ImageAvatar} alt="Avatar" />
        </div>
    )
}

export default Avatar
